import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { BASE_URL } from '../../config/config';
import toast from 'react-hot-toast';

const PracticeProblem = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [companyTags, setCompanyTags] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [activeCompanyTag, setActiveCompanyTag] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [userAnswers, setUserAnswers] = useState({});
  const [showExplanations, setShowExplanations] = useState({});
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/mcq`);
        setQuestions(data.mcqs);

        const types = [...new Set(data.mcqs.map(q => q.type))];
        setCategories(types);

        const companies = [...new Set(data.mcqs.map(q => q.companyTag).filter(Boolean))];
        setCompanyTags(companies);

        const defaultTab = searchParams.get('type') || types[0] || '';
        setActiveTab(defaultTab);

        if (user && token) {
          const bookmarkRes = await axios.get(`${BASE_URL}/mcq/getbookmark-ques`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setBookmarkedQuestions(new Set(bookmarkRes.data.bookmarks));
        }

        filterQuestions(defaultTab, data.mcqs);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchData();
  }, []);

  const filterQuestions = (type, allQuestions, companyTag = '', search = '') => {
    let filtered = allQuestions.filter(q => q.type === type);

    if (companyTag) {
      filtered = filtered.filter(q => q.companyTag === companyTag);
    }

    if (search.trim()) {
      const s = search.toLowerCase();
      filtered = filtered.filter(
        q => q.question.toLowerCase().includes(s) || (q.companyTag && q.companyTag.toLowerCase().includes(s))
      );
    }

    setFilteredQuestions(filtered);
  };

  const handleTabChange = (type) => {
    setActiveTab(type);
    setActiveCompanyTag('');
    setSearchTerm('');
    setSearchParams({ type });
    filterQuestions(type, questions);
    setUserAnswers({});
    setShowExplanations({});
  };

  const handleCompanyTagClick = (tag) => {
    const newTag = tag === activeCompanyTag ? '' : tag;
    setActiveCompanyTag(newTag);
    filterQuestions(activeTab, questions, newTag, searchTerm);
    setUserAnswers({});
    setShowExplanations({});
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    filterQuestions(activeTab, questions, activeCompanyTag, val);
  };

  const handleOptionClick = (questionIndex, selectedOption) => {
    if (userAnswers[questionIndex] !== undefined) return;
    setUserAnswers(prev => ({ ...prev, [questionIndex]: selectedOption }));
  };

  const toggleExplanation = (index) => {
    setShowExplanations(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleBookmark = async (questionId) => {
    if (!user || !token) {
      navigate('/login');
      return;
    }

    try {
      if (bookmarkedQuestions.has(questionId)) {
        await axios.delete(`${BASE_URL}/mcq/${questionId}/bookmark`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookmarkedQuestions(prev => {
          const newSet = new Set(prev);
          newSet.delete(questionId);
          return newSet;
        });
        toast.success("Question removed from bookmarks");
        
      } else {
        await axios.post(`${BASE_URL}/mcq/${questionId}/bookmark`, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookmarkedQuestions(prev => new Set(prev).add(questionId));
        toast.success("Question bookmarks successfully");

      }
    } catch (error) {
      console.error("Bookmark toggle failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 py-6">
      <div className="w-full md:w-[80%] flex flex-col gap-4">
        <div className="bg-white p-4 shadow-md rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(type => (
              <button
                key={type}
                onClick={() => handleTabChange(type)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  activeTab === type ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border px-3 py-2 rounded-md w-full max-w-xs"
          />
        </div>

        {companyTags.length > 0 && (
          <div className="bg-white p-4 shadow-md rounded-md flex flex-wrap gap-2">
            <h3 className="font-semibold mr-4">Filter by Company:</h3>
            {companyTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleCompanyTagClick(tag)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  activeCompanyTag === tag
                    ? 'bg-green-600 text-white border-green-700'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-green-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-3 capitalize flex justify-between items-center">
            <span>{activeTab} Questions</span>
            <span className="text-sm text-gray-500">
              {filteredQuestions.length} {filteredQuestions.length === 1 ? 'question' : 'questions'}
            </span>
          </h2>

          {filteredQuestions.length === 0 ? (
            <p className="text-gray-500">No questions available.</p>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((q, index) => {
                const selected = userAnswers[index];
                const isCorrect = selected === q.correctOption;
                const isBookmarked = bookmarkedQuestions.has(q._id);

                return (
                  <div key={q._id} className="border border-gray-200 rounded-md p-4 relative">
                    <button
                      onClick={() => toggleBookmark(q._id)}
                      className="absolute top-3 right-3 text-xl"
                    >
                      {isBookmarked ? (
                        <FaBookmark className="text-yellow-500 hover:text-yellow-600" />
                      ) : (
                        <FaRegBookmark className="text-gray-400 hover:text-yellow-500" />
                      )}
                    </button>

                    <h3 className="font-medium mb-2">{index + 1}. {q.question}</h3>
                    <ul className="space-y-2">
                      {q.options.map((opt, i) => {
                        let optionStyle = "border px-3 py-2 rounded-md cursor-pointer";

                        if (selected) {
                          if (opt === selected && opt === q.correctOption) {
                            optionStyle += " bg-green-200 border-green-500 text-green-800";
                          } else if (opt === selected && opt !== q.correctOption) {
                            optionStyle += " bg-red-200 border-red-500 text-red-800";
                          } else if (opt === q.correctOption) {
                            optionStyle += " bg-green-100 border-green-400 text-green-700";
                          } else {
                            optionStyle += " bg-gray-100";
                          }
                        } else {
                          optionStyle += " hover:bg-blue-100";
                        }

                        return (
                          <li
                            key={i}
                            className={optionStyle}
                            onClick={() => handleOptionClick(index, opt)}
                          >
                            {opt}
                          </li>
                        );
                      })}
                    </ul>

                    <button
                      onClick={() => toggleExplanation(index)}
                      className="mt-3 px-4 py-1 text-sm border rounded-md bg-gray-100 hover:bg-gray-200"
                    >
                      {showExplanations[index] ? 'Hide Explanation' : 'Show Explanation'}
                    </button>

                    {showExplanations[index] && (
                      <p className="mt-2 text-sm text-gray-700">
                        💡 <strong>Explanation:</strong> {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeProblem;
