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

const SITE_MAP = {
  home: {
    title: 'Главная',
    groups: [
      {
        title: 'О системе',
        items: [
          { id: 'about', title: 'О системе' },
          { id: 'concept', title: 'Концепция' },
          { id: 'technology', title: 'Технология' },
          { id: 'ecosystem', title: 'Экосистема' },
        ],
      },
      {
        items: [
          { id: 'schedule', title: 'Расписание' },
          { id: 'reviews', title: 'Отзывы' },
        ],
      },
    ],
  },
  learning: {
    title: 'Обучение',
    groups: [
      {
        items: [
          { id: 'learning-approach', title: 'Подход к обучению', subtitle: 'Путь восхождения по рубежам' },
          { id: 'learning-formats', title: 'Форматы обучения', subtitle: 'Курс, интенсив, спринт' },
        ],
      },
      {
        title: 'Маршрут',
        items: [
          { id: 'launch', title: 'Запуск' },
          { id: 'milestone-1', title: 'Рубеж 1 — База' },
          { id: 'milestone-2', title: 'Рубеж 2 — Ясность' },
          { id: 'milestone-3', title: 'Рубеж 3 — Опора' },
          { id: 'milestone-4', title: 'Рубеж 4 — Дело' },
          { id: 'milestone-5', title: 'Рубеж 5 — Роли' },
        ],
      },
      {
        title: 'Треки',
        items: [
          { id: 'tracks', title: 'Все треки', action: 'tracks' },
        ],
      },
    ],
  },
  intensives: {
    title: 'Интенсивы',
    groups: [
      {
        items: [
          { id: 'intensives-intro', title: 'Об интенсивах' },
        ],
      },
      {
        title: 'Структура',
        items: [
          { id: 'discipline', title: 'Дисциплина' },
          { id: 'control', title: 'Контроль' },
          { id: 'partner', title: 'Партнер' },
          { id: 'group', title: 'Группа' },
          { id: 'guide', title: 'Проводник' },
          { id: 'planner', title: 'Планировщик' },
          { id: 'reporting', title: 'Отчетность' },
          { id: 'goals', title: 'Цели' },
          { id: 'settings-item', title: 'Установки' },
          { id: 'breakdowns', title: 'Разборы' },
        ],
      },
    ],
  },
  sprints: {
    title: 'Спринты',
    groups: [
      {
        items: [
          { id: 'sprints-intro', title: 'О спринтах' },
        ],
      },
      {
        title: 'Элементы',
        items: [
          { id: 'pairs-triples', title: 'Двойки и Тройки' },
          { id: 'catch-up', title: 'Добивки' },
          { id: 'sprint-goals', title: 'Цели' },
        ],
      },
    ],
  },
  projects: {
    title: 'Проекты',
    groups: [
      {
        items: [
          { id: 'projects-intro', title: 'Что такое проекты' },
        ],
      },
      {
        title: 'Проекты',
        items: [
          { id: 'project-1', title: 'Проект 1' },
          { id: 'project-2', title: 'Проект 2' },
        ],
      },
    ],
  },
};

const CONTENT = {

  // ── Главная ───────────────────────────────────────────────────────────────

  'about': [
    'Система Вертикаль — это концепция, технология и экосистема.',
    'Если совсем просто — это как университет, где дают углублённые знания, учат технологии их применения и предоставляют постоянное место в профессиональной среде для закрепления и совершенствования своих взглядов и навыков.',
    'Вертикаль создана для мужчин, которые хотят управлять своим развитием сознательно — а не жить от проблемы до проблемы, шаг вперёд, шаг назад.',
  ],
  'concept': [
    'Под саморазвитием мы понимаем развитие личности.',
    'Личность — это самосознание, или просто само наше сознание. Это то, что позволяет нам говорить о себе «Я». Это внутренний наблюдатель, осознающий перемены в себе — внешность, эмоции, взгляды — но остающийся самим собой.',
    'Развитие — это сознательно управляемое улучшение себя: улучшение качества сознания и того, что с ним связано.',
    'Развитие — это природный механизм нашей жизни. Мы растём физически, анализируем опыт, мудреем. Но когда жизнь идёт самотёком — развитие путаное, тормозное, иногда даже вспять.',
    'Ракеты, летящие в космос, не создаются людьми, случайно что-то узнавшими — это сложный системный процесс, дающий качественно иной прорывной результат. Поэтому здесь есть выбор: либо управлять своей жизнью, получая ответы на вопросы, обретая призвание и силу, либо оставить всё самотёком.',
  ],
  'technology': [
    'Сознание не в вакууме. Оно тесно связано с телом — зависит от него. Тесно связано с внешней видимой и тонкой невидимой средой.',
    'Сознание живёт в, или между, 5-ю реальностями: тело, ум, душа, дело, отношения. Каждое тянет в свою сторону. Трудно различить. Легко запутаться что выбрать. Сложно управлять.',
    'Технология Вертикали — это системный путь управления собой через авторскую позицию, укрепление физиологии и управленческий цикл из 6 шагов: Напланируй, Соберись, Сделай, Зафиксируй, Разбери, Измени.',
    'Для каждого шага есть от одной до трёх технологий исполнения — лучшие практики из накопленного опыта, которые уменьшают количество ошибок и повышают эффективность работы с собой.',
  ],
  'ecosystem': [
    'Вертикаль — это не только обучение. Это экосистема с сетью профильных проектов.',
    'Придя в Вертикаль, попадаешь в место силы и пространство роста. Больше не надо собирать информацию по крупицам, годами искать рабочие подходы, идти в одиночку, выпадая из процесса на полгода или год.',
    'Всё находится в одном месте с удобной инфраструктурой: концепция, технологии, практики, уроки, спринты, интенсивы, безоткатная среда, обучение с соратниками, проекты.',
    'Система Вертикаль работает над внедрением цифровых технологий: ботов, приложений и в недалёкой перспективе — ИИ, который поможет взять на себя часть рутины во взаимодействии с участниками.',
  ],

  // ── Обучение ──────────────────────────────────────────────────────────────

  'learning-approach': [
    'Подход к обучению в Вертикали сводится не просто к теории и заданиям, а к передаче опыта.',
    'По аналогии с восхождением в горы — это подъём в группе с опытным Проводником. Ты учишься не только через восприятие знаний и наблюдение за собой, но и через передачу усвоенных знаний в работе с партнёрами.',
    'Потому что реальные знания — это те, которым ты можешь научить. Только так ты можешь сказать точно, что усвоил.',
    'Рост личности происходит по вертикали — по 5 уровням зрелости сознания: материальный, эмоциональный, оценочный, ментальный, духовный.',
    'Без знания уровней и их значений развитие будет как восхождение в горы без знания ландшафта и метеоусловий — вслепую. В жизни, на практике, у многих даже понимания нет, что значит развиваться: плотный туман в голове.',
  ],
  'learning-formats': [
    'Вертикаль предлагает несколько форматов обучения — в зависимости от готовности и ритма жизни.',
    '— Уроки: самостоятельное прохождение в своём темпе, 3 уровня сложности. Один урок раскрывает одну тему. Можно начать прямо сейчас.',
    '— Интенсивы (Рубежи 1–5): трансформационные тренинги длительностью 3–6 недель, в паре или тройке с партнёром и Проводником. Флагманский метод Вертикали.',
    '— Спринты: недельные циклы фокуса на одной из 5 областей развития. Из месяца в месяц, по кругу. Безоткатная среда.',
    'Идеальный путь: начать с уроков, освоить основные установки и техники, затем зайти в интенсив для углубления опыта, после — перейти в спринты для закрепления без откатов.',
  ],
  'launch': [
    'Запуск — это точка входа в систему Вертикаль.',
    'Первое, с чего мы начинаем — с позиции. С позиции, где мы являемся причиной того, что с нами происходит. В психологии это называется я-позиция или авторская позиция.',
    'Мы учимся быть авторами своей жизни. Учимся видеть ответственность и с ней новые возможности в своих руках. Готовность идти, не искать виноватых, работать над собой — без этого твёрдого решения далеко не уйти.',
    'Ирония в том, что как только решаешь что-то изменить в жизни, кажется, что тебя начинают испытывать. На самом деле никто никого не испытывает — это ты начинаешь меняться и влиять на устоявшиеся процессы и людей. Это сопротивление среды — и его без авторской позиции не преодолеть.',
  ],
  'milestone-1': [
    'Материальный уровень зрелости сознания.',
    'Это уровень, где сами по себе вещи представляют ценность, а решения принимаются из нехватки: фокус на «надо ещё», страх потери. В крайней точке — накопительство как черта характера, зависимость от наличия и количества вещей.',
    'Плюс этого уровня: он заставляет действовать. Нужда зовёт. Но зависимость от количества — и его теневая сторона.',
    'Если случается пожар или катастрофа, пропадают вещи, деньги — для человека это сродни потере смысла самой жизни. Вот пример материального уровня — в его крайней нижней точке.',
  ],
  'milestone-2': [
    'Эмоциональный уровень зрелости сознания.',
    'Здесь уже есть вкус к вещам, появляется выбор приятного и неприятного. Люди нужны не просто функционально, а те, с кем приятно общаться. Состояние диктует решения и действия: есть настроение — делаешь, нет — откладываешь.',
    'Освобождает от грубой материальной зависимости. Но создаёт зависимость от состояния — это противоречит закону развития. Характер закаляется под давлением. Есть проблема — если её решаешь, растёшь, приобретаешь опыт, становишься крепче. Но как решить проблему, если избегаешь её, потому что некомфортно?',
  ],
  'milestone-3': [
    'Оценочный уровень зрелости сознания.',
    'Здесь ценность достижений и зависимость от их подтверждения. Важно, как оценят, — и это влияет на выбор и устойчивость.',
    'Освобождает от зависимости от состояния — теперь эмоциональное состояние уже не тормозит развитие. Но может приводить к ложному стремлению к символам успеха, социальным трендам — в угоду оценочным вещам, зачастую конъюнктурным и не своим.',
    'Со временем человек прислушивается к себе, замечает, что оценки других уже не сильно волнуют. Да и сам он себе уже оценку поставил — потому что знает, что из себя представляет.',
  ],
  'milestone-4': [
    'Ментальный (идейный) уровень зрелости сознания.',
    'Здесь ценность большой идеи и зависимость от амбиций. Человеку становится важно быть частью чего-то большого, интересного, важного замысла. Именно в этом он начинает ощущать себя.',
    'Уже не так важно, как его назовут. Он просто берёт и выполняет нужные функции, невзирая на статусы. Его двигает определённая идея, определённый замысел.',
    'Крайность: человек, движимый идеей, может идти по головам, не замечать, как деградируют отношения и другие области жизни. Со временем появляется видение — начинает замечать перекосы и исправлять.',
  ],
  'milestone-5': [
    'Духовный уровень зрелости сознания.',
    'Здесь ценность служения и зависимость от связи с Целым (Богом, наследием, смыслом выше личной выгоды). Появляется опора выше личной выгоды и текущего состояния.',
    'На этом уровне человек свободен от амбиций — точнее, свободен от зависимости от них. Больше прислушивается к внутреннему ощущению, к голосу совести, к правильности жизни, истинности своих мотивов.',
    'С позиции духовного уровня видишь насквозь все остальные уровни, где человек сам больше присутствует. Кто-то верит в Бога — для него это вера. Кто-то в Бога не верит, но чувствует смысл в наследии, в продолжении своего рода.',
  ],

  // ── Интенсивы ─────────────────────────────────────────────────────────────

  'intensives-intro': [
    'Интенсивы (Рубежи 1–5) — флагманский формат обучения в Вертикали.',
    'Это концентрат, где на протяжении от 3 до 6 недель ты изучаешь и применяешь материал в паре или тройке с партнёром и Проводником.',
    'По аналогии с восхождением в горы — это подъём в группе с опытным проводником. В отличие от уроков, здесь есть эффект группы, Проводника, дисциплина и среда давления, которая не даёт слиться.',
    'Ни один конкурент сегодня не предлагает ни такой глубокой и целостной концепции, ни системы обучения технологии роста, ни среды для закрепления и совершенствования навыков саморазвития.',
  ],
  'discipline': [
    'Дисциплина — основа движения по рубежам.',
    'Готовность идти, не искать виноватых, работать над собой — без этого твёрдого решения далеко не уйти.',
    'Как только решаешь что-то изменить в своей жизни, начинаешь меняться и влиять на устоявшиеся процессы и людей. Это ощущается как давление — но это не среда на тебя давит. Это ты на неё начинаешь давить. Люди вокруг просто защищают свою привычную жизнь.',
    'Без авторской позиции сопротивление среды не преодолеть. В гору не подняться без внутренней готовности принимать сложность маршрута и не жаловаться, что проводник не так ведёт или группа не та.',
  ],
  'control': [
    'Контроль — это управление через осознанность, а не через силу.',
    'Чтобы идти не хаотично рывками и откатами, мы работаем с усовершенствованным управленческим циклом PDAC.',
    'Наш цикл содержит не 4, а 6 шагов: Напланируй, Соберись, Сделай, Зафиксируй, Разбери, Измени.',
    'В практической работе с мужчинами замечено: если перед делом не собраться — план часто срывается. Если не зафиксировать результат — разбора и анализа дальше нет, либо он становится поверхностным и бесполезным.',
  ],
  'partner': [
    'Партнёр — это тот, с кем ты идёшь в паре или тройке во время спринта или интенсива.',
    'Плюс в том, что ты работаешь с тем, кто в теме системы. Вы говорите на одном языке, знаете технологию — усиливаете друг друга, подсвечиваете слепые зоны, отклонения.',
    'В такой групповой работе есть свои рекомендации и механики по эффективному процессу совместной работы — всё уже проработано и знаем, как хорошо и что работает.',
  ],
  'group': [
    'Малые группы — Двойки и Тройки — ключевой инструмент безоткатной среды.',
    'Работа в малых группах не даёт слиться. Это и товарищеское чувство локтя, и дружеский пендаль. Это где ты идёшь на равных, узнаёшь себя в слабостях других, видишь свои достоинства и недостатки, подсвечиваешь слепые зоны.',
    'В итоге спринты в сочетании с работой в малых группах дают возможность и закрепить полученный опыт из тренингов или уроков, и не создавать чрезмерную дополнительную нагрузку на жизнь.',
  ],
  'guide': [
    'Проводник — внешний аналог своего внутреннего стержня.',
    'Держит дисциплину, устойчивость и силу духа. Является проводником к тонкому опыту восприятия — подсветит состояния, которые раньше ты не различал. Это человек, начавший системный путь развития раньше, более опытный, больше видит, корректирует, расширяет границы твоих возможностей.',
    'Ты сам в себя не веришь, сам не видишь, на что способен. А со стороны из опыта виднее — в чём сам проблема, где застрял.',
    'За месяц такой плотной работы невозможно остаться прежним. Во-первых, нельзя будет забыть, каким ты можешь быть, если постараешься. Во-вторых, за это время появится иное состояние, навыки и угол зрения на себя и свою жизнь — по-старому жить не получится.',
  ],
  'planner': [
    'Планировщик — это управленческий цикл из 6 шагов.',
    '1. Напланируй — что конкретно ты намерен сделать.',
    '2. Соберись — подготовь себя и среду перед действием.',
    '3. Сделай — выполни намеченное.',
    '4. Зафиксируй — запиши то, что произошло на самом деле.',
    '5. Разбери — проанализируй причины в себе, если был срыв.',
    '6. Измени — скорректируй подход по технологии разбора срыва.',
    'Для каждого шага есть от одной до трёх технологий исполнения — лучшие практики из накопленного опыта участников, которые уменьшают количество ошибок и повышают эффективность работы с собой.',
  ],
  'reporting': [
    'Отчётность — инструмент осознанности, а не контроля.',
    'Если не зафиксировать результат, то разбора и анализа дальше нет. Или он становится поверхностным, внешним и бесполезным.',
    'Личные чаты внутри сообщества у каждого участника позволяют делиться своими мыслями, ситуацией, недельными отчётами — чтобы получать поддержку и обратную связь.',
    'Система чатов гибко позволяет выбирать — кому показывать свои мысли и записи, а кому нет. Закрыться от всех и писать самому себе, потом по готовности добавлять тех, с кем уже лично познакомился.',
  ],
  'goals': [
    'Цели в контексте Вертикали — это не просто намерения, это вектор восхождения.',
    'Без знания уровней и их значений развитие будет как восхождение в горы без знания ландшафта. В целом большинство так и живёт — от проблемы до проблемы, шаг вперёд, шаг назад, рывок, откат.',
    'Цель — это не «достигнуть», а «стать». По мере взросления мы осваиваем 5 реальностей, включая и само сознание, — и на каждую из этих реальностей смотрим через призму зрелости сознания. Чем более зрелое сознание — тем глубже мы понимаем и управляем телом, разумом, работаем с душой, своим делом и отношениями.',
  ],
  'settings-item': [
    'Установки — это базовые позиции, с которых начинается движение.',
    'Первое с чего мы начинаем в Вертикали — с позиции. С позиции, где мы являемся причиной того, что с нами происходит. Всё, что мы имеем — мы к этому пришли, сознательно или несознательно. Мы могли изменить, если бы больше знали, больше занимались. Мы этого не сделали. Всё пошло, как пошло.',
    'Учимся видеть ответственность и с ней новые возможности в своих руках. Готовность идти, не искать виноватых, работать над собой — без этого твёрдого решения далеко не уйдём.',
  ],
  'breakdowns': [
    'Разборы — технология работы со срывами и откатами.',
    'Обычно мы что-то планируем и делаем. Не получилось — пробуем ещё раз. Возможно что-то поменяем, если догадаемся. Но между этими вещами мы злимся, жалеемся, обвиняем других. Порой годами. Часто бросая.',
    'Задача из авторской позиции — увидеть и зафиксировать причину в себе. Далее мы разбираем эту причину, углубляемся по технологии разбора срыва и по технологии меняем то, что увидели.',
    'Цель разбора — не самобичевание, а понимание и изменение. Это путь к тому, чтобы идти чётко, ритмично, последовательно.',
  ],

  // ── Спринты ───────────────────────────────────────────────────────────────

  'sprints-intro': [
    'Спринты — инструмент безоткатной среды в Вертикали.',
    'Спринт — это неделя, в которой внимание фокусируем только на одной из 5 областей развития: тело, душа, разум, дело, отношения. И так 5 недель подряд по кругу, циклично, из месяца в месяц.',
    'Для спринтов есть свои адаптированные материалы из всех 5 тренингов — те вещи, которые надо вспомнить, которые повторяются, которые можно и нужно развивать.',
    'По спринтам можно идти одному, а можно договориться с другими участниками и объединиться в Двойку или Тройку.',
  ],
  'pairs-triples': [
    'Двойки и Тройки — малые группы внутри спринта.',
    'Плюс в том, что ты работаешь с тем, кто в теме системы. Вы говорите на одном языке, знаете технологию — усиливаете друг друга, подсвечиваете слепые зоны, отклонения.',
    'В такой групповой работе есть свои рекомендации и механики по эффективному процессу совместной работы — всё уже проработано и знаем, как хорошо и что работает.',
  ],
  'catch-up': [
    'Добивки — это работа с тем, что не получилось в течение спринта.',
    'Спринты в сочетании с работой в малых группах дают возможность и закрепить полученный опыт из тренингов или уроков, и не создавать чрезмерную дополнительную нагрузку на жизнь.',
    'Это позволяет применять их на постоянной основе, совершенствуясь в мастерстве управления собой и своим личностным ростом — не перекатывая все остальные области: бизнес, семью, другие дела.',
  ],
  'sprint-goals': [
    'Цели спринта — конкретные, измеримые, на неделю.',
    'Каждый спринт фокусируется на одной области: тело, душа, разум, дело, отношения. Цели ставятся по управленческому циклу: Напланируй, Соберись, Сделай, Зафиксируй, Разбери, Измени.',
    'Важно: цели спринта — это не грандиозные амбиции. Это конкретные шаги восхождения. Маленькие, но настоящие.',
  ],

  // ── Проекты ───────────────────────────────────────────────────────────────

  'projects-intro': [
    'Помимо уроков, интенсивов и спринтов мы развиваем сообщество Вертикаль как экосистему с сетью профильных проектов.',
    'Проектом может быть любой бизнес или некоммерческое объединение, соглашающееся с концепцией развития Вертикали.',
    'Сеть проектов будет расширяться. Пришедший в Вертикаль попадает в место силы и пространство роста — больше не надо собирать информацию по крупицам, годами искать рабочие подходы, идти в одиночку.',
    'Участникам Вертикали могут быть согласованы выгодные условия, а сами проекты получают методологическую поддержку, помощь в продвижении и лояльных клиентов.',
  ],
  'project-1': [
    'Проект «Личный воин» — открытый тренировочный час.',
    'Это публичный тренировочный час в рамках сообщества Вертикаль, где может вступить любой мужчина. Мы, как мужчины, делимся своими тренировками: кто-то отжимался, кто-то просто ходьбой занимался, кто-то в спортзале.',
    'Участники участвуют в командном соревновании. Бот считает статистику, выдаёт награды, ведёт рейтинги команд и личные.',
    'Цели проекта: объединить тренирующихся, чтобы было веселее и труднее слиться, чтобы просто было больше мужчин здоровых и энергичных. В концепции Вертикали это помогает прокатывать тело.',
  ],
  'project-2': [
    'Проект «Философский клуб» — где обсуждаются вопросы, на которые обычно нет ни времени, ни собеседников.',
    'Примером проекта из бизнеса можно назвать проект «Отец и сын» — туризм с целью сплочения сына и отца, с сопровождением психолога и рекомендациями по улучшению отношений.',
    'Участникам Вертикали могут быть согласованы выгодные условия участия, а сам проект получает методологическую поддержку, помощь в продвижении и лояльных клиентов.',
  ],
};
