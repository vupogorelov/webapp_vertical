'use strict';

const TRACKS = [
  {
    id: 'python-data-fundamentals',
    title: 'Python Data Fundamentals',
    tag: 'Уроки',
    palette: ['#6B4C9A', '#8B6FCC', '#4A2D7F', '#2E7D32', '#4CAF50', '#1B1035', '#3D2870'],
    icon: 'python',
    courseCount: 8,
    description: 'Master the fundamentals of Python for data analysis. Learn to work with data structures, manipulate datasets, and create stunning visualizations using industry-standard libraries like Pandas, NumPy, and Matplotlib.',
    courses: [
      { id: 1, title: 'Introduction to Python', duration: '2 hr', description: 'Get started with Python programming. Learn variables, data types, control flow, and basic functions to build a solid foundation.' },
      { id: 2, title: 'Python Data Structures', duration: '3 hr', description: 'Deep dive into lists, dictionaries, sets, and tuples. Master list comprehensions and functional programming patterns.' },
      { id: 3, title: 'Data Manipulation with Pandas', duration: '4 hr', description: 'Manipulate and analyze data efficiently using the Pandas library. Learn DataFrames, Series, merging, and data cleaning techniques.' },
      { id: 4, title: 'Data Visualization', duration: '3 hr', description: 'Create compelling charts and graphs with Matplotlib and Seaborn to communicate your data insights clearly.' },
      { id: 5, title: 'NumPy Fundamentals', duration: '2 hr', description: 'Numerical computing with NumPy arrays. Learn broadcasting, vectorized operations, and mathematical functions.' },
      { id: 6, title: 'Statistical Analysis in Python', duration: '2 hr', description: 'Apply statistical methods to real datasets including hypothesis testing, correlation analysis, and regression.' },
      { id: 7, title: 'Working with APIs', duration: '2 hr', description: 'Fetch and process data from web APIs using the Python requests library. Parse JSON and handle authentication.' },
      { id: 8, title: 'Capstone Project', duration: '3 hr', description: 'Apply everything you have learned in a comprehensive real-world data analysis project from raw data to final insights.' },
    ]
  },
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals',
    tag: 'Спринты',
    palette: ['#3D3D00', '#5C5C00', '#4A4A10', '#1A5C1A', '#2E7D32', '#4CAF50', '#222200'],
    icon: 'brain',
    courseCount: 6,
    description: 'Discover the fundamentals of AI, learn to leverage AI effectively for work, and dive into models like ChatGPT to navigate the future of technology with confidence.',
    courses: [
      { id: 1, title: 'Introduction to AI for Work', duration: '2 hr', description: 'Explore what AI is and how to use it responsibly for smarter, more productive work!' },
      { id: 2, title: 'Understanding ChatGPT', duration: '2 hr', description: 'Deep dive into how large language models work and how to use them effectively with well-crafted prompts.' },
      { id: 3, title: 'AI Ethics and Responsibility', duration: '2 hr', description: 'Explore the ethical implications of AI systems, bias, fairness, and best practices for responsible AI use.' },
      { id: 4, title: 'Machine Learning Basics', duration: '3 hr', description: 'Understand the core concepts behind machine learning: supervised learning, unsupervised learning, and model training.' },
      { id: 5, title: 'Deep Learning Fundamentals', duration: '2 hr', description: 'Learn the basics of neural networks, layers, activation functions, and how modern AI achieves remarkable results.' },
      { id: 6, title: 'AI in Practice', duration: '1 hr', description: 'Explore real-world AI applications across healthcare, finance, creative industries, and your day-to-day workflow.' },
    ]
  },
  {
    id: 'sql-fundamentals',
    title: 'SQL Fundamentals',
    tag: 'Уроки',
    palette: ['#B85C00', '#D4691A', '#A04500', '#8B3A00', '#C47A35', '#6B2D00', '#E8824A'],
    icon: 'sql',
    courseCount: 5,
    description: 'Learn SQL from the ground up. Master database querying, data manipulation, and advanced SQL techniques used by professional data analysts worldwide.',
    courses: [
      { id: 1, title: 'Introduction to SQL', duration: '2 hr', description: 'Learn the basics of relational databases and write your first SQL queries to select and filter data.' },
      { id: 2, title: 'Filtering and Sorting Data', duration: '2 hr', description: 'Master WHERE clauses, comparison operators, ORDER BY, and logical operators to find exactly the data you need.' },
      { id: 3, title: 'Joining Tables', duration: '2 hr', description: 'Combine data from multiple tables using INNER, LEFT, RIGHT, and FULL JOINs. Understand primary and foreign keys.' },
      { id: 4, title: 'Aggregating Data', duration: '2 hr', description: 'Summarize data using GROUP BY, HAVING, and aggregate functions like COUNT, SUM, AVG, MIN, and MAX.' },
      { id: 5, title: 'Subqueries and CTEs', duration: '2 hr', description: 'Write advanced queries with subqueries and Common Table Expressions to solve complex analytical problems.' },
    ]
  },
  {
    id: 'associate-data-scientist-python',
    title: 'Associate Data Scientist in Python',
    tag: 'Проекты',
    palette: ['#4B3AB5', '#6655CC', '#3A2A99', '#1E1466', '#7B6FDD', '#2D22A3', '#523EBF'],
    icon: 'python',
    courseCount: 8,
    description: 'Become a professional data scientist with Python. Cover everything from exploratory data analysis and statistical thinking to machine learning and model evaluation.',
    courses: [
      { id: 1, title: 'Python for Data Science', duration: '3 hr', description: 'Build essential Python skills for data science workflows, including environment setup and best practices.' },
      { id: 2, title: 'Exploratory Data Analysis', duration: '3 hr', description: 'Systematically explore and understand datasets using visual and statistical techniques.' },
      { id: 3, title: 'Statistical Thinking', duration: '2 hr', description: 'Apply statistical reasoning to data problems: distributions, sampling, and inferential statistics.' },
      { id: 4, title: 'Supervised Learning with scikit-learn', duration: '4 hr', description: 'Build and tune classification and regression models using the scikit-learn library.' },
      { id: 5, title: 'Unsupervised Learning', duration: '3 hr', description: 'Discover patterns in unlabeled data using clustering, dimensionality reduction, and anomaly detection.' },
      { id: 6, title: 'Model Evaluation and Tuning', duration: '2 hr', description: 'Evaluate model performance with cross-validation, learn bias-variance tradeoff, and optimize hyperparameters.' },
      { id: 7, title: 'Feature Engineering', duration: '2 hr', description: 'Create and select better features to improve model accuracy through encoding, scaling, and transformation.' },
      { id: 8, title: 'Capstone Project', duration: '4 hr', description: 'Apply your full data science skill set to a real-world project from data collection to presentation of results.' },
    ]
  },
  {
    id: 'associate-data-analyst-sql',
    title: 'Associate Data Analyst in SQL',
    tag: 'Проекты',
    palette: ['#C06000', '#A84E00', '#D97020', '#7A3A00', '#B86A1A', '#8C4400', '#E08030'],
    icon: 'sql',
    courseCount: 8,
    description: 'Become a professional data analyst using SQL. Learn to query databases efficiently, analyze business data, and create insightful reports for decision-making.',
    courses: [
      { id: 1, title: 'SQL Basics', duration: '2 hr', description: 'Start with fundamental SQL queries: SELECT, FROM, WHERE, and sorting your results.' },
      { id: 2, title: 'Data Aggregation', duration: '2 hr', description: 'Summarize large datasets with GROUP BY, HAVING, and aggregate functions.' },
      { id: 3, title: 'Advanced Joins', duration: '2 hr', description: 'Combine data from multiple tables using complex JOIN operations and set operations like UNION.' },
      { id: 4, title: 'Window Functions', duration: '2 hr', description: 'Use powerful analytical window functions like ROW_NUMBER, RANK, LAG, LEAD, and running totals.' },
      { id: 5, title: 'Data Cleaning in SQL', duration: '2 hr', description: 'Handle nulls, duplicates, inconsistencies, and format data for clean, reliable analysis.' },
      { id: 6, title: 'Business Reporting', duration: '2 hr', description: 'Build reports and dashboards from SQL queries. Structure data for BI tools and stakeholders.' },
      { id: 7, title: 'Query Optimization', duration: '2 hr', description: 'Write efficient queries, understand indexes, and analyze execution plans to improve performance.' },
      { id: 8, title: 'Capstone Project', duration: '4 hr', description: 'Build a complete data analysis project solving a real business problem from start to finish.' },
    ]
  },
  {
    id: 'r-programming-fundamentals',
    title: 'R Programming Fundamentals',
    tag: 'Уроки',
    palette: ['#1A4A8A', '#1E5FA0', '#0D3366', '#2673B8', '#155090', '#0A2744', '#1D5C9E'],
    icon: 'r',
    courseCount: 6,
    description: 'Learn R programming for statistical computing and data visualization. Perfect for statisticians and analysts who want powerful tools for data exploration and reporting.',
    courses: [
      { id: 1, title: 'Introduction to R', duration: '2 hr', description: 'Get started with R programming: syntax, data types, vectors, and working with the RStudio environment.' },
      { id: 2, title: 'Data Manipulation with dplyr', duration: '2 hr', description: 'Transform data efficiently with dplyr verbs: filter, select, mutate, summarize, and arrange.' },
      { id: 3, title: 'Data Visualization with ggplot2', duration: '3 hr', description: 'Create beautiful and informative plots using the grammar of graphics approach in ggplot2.' },
      { id: 4, title: 'Statistical Analysis in R', duration: '3 hr', description: 'Perform hypothesis tests, ANOVA, correlation, and linear regression using R statistical functions.' },
      { id: 5, title: 'Working with Data Frames', duration: '2 hr', description: 'Master R data frames and tibbles for importing, exporting, reshaping, and joining tabular data.' },
      { id: 6, title: 'Reporting with R Markdown', duration: '2 hr', description: 'Create reproducible, professional reports that combine code, results, and narrative text.' },
    ]
  },
  {
    id: 'theory-statistics',
    title: 'Statistics Fundamentals',
    tag: 'Тренинги',
    palette: ['#4A1A6B', '#6B3A8C', '#3A0A55', '#7A4AAC', '#5A2A7B', '#2A0040', '#603285'],
    icon: 'chart',
    courseCount: 5,
    description: 'Build a solid theoretical foundation in statistics. Understand probability, distributions, hypothesis testing, and how statistical reasoning drives data-driven decisions.',
    courses: [
      { id: 1, title: 'Introduction to Statistics', duration: '2 hr', description: 'Core statistical concepts: mean, median, variance, and the difference between descriptive and inferential statistics.' },
      { id: 2, title: 'Probability Theory', duration: '3 hr', description: 'Understand probability, conditional probability, Bayes theorem, and common probability distributions.' },
      { id: 3, title: 'Hypothesis Testing', duration: '2 hr', description: 'Design and interpret statistical tests: t-tests, chi-square, p-values, and Type I/II errors.' },
      { id: 4, title: 'Regression Analysis', duration: '3 hr', description: 'Model relationships between variables with simple and multiple linear regression. Interpret coefficients and fit.' },
      { id: 5, title: 'Bayesian Statistics', duration: '2 hr', description: 'Explore Bayesian reasoning, prior and posterior distributions, and how Bayesian methods differ from frequentist approaches.' },
    ]
  },
];

const TAG_FILTERS = ['Главное', 'Уроки', 'Спринты', 'Тренинги', 'Проекты'];
