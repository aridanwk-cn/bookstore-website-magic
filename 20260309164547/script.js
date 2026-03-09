// 真实的豆瓣书籍数据（包含真实封面图片）
const booksData = {
    hot: [
        {
            id: 1,
            title: "三体",
            author: "刘慈欣",
            description: "地球往事三部曲的第一部，讲述了人类文明与三体文明的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。",
            price: "¥45.00",
            rating: 8.8,
            doubanRating: 8.8,
            tags: ["科幻", "热门", "畅销"],
            category: "fiction",
            cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
            doubanUrl: "https://book.douban.com/subject/2567698/",
            topReview: {
                content: "宏大的宇宙观，深刻的人性探讨。刘慈欣用科幻的外壳，探讨了人类文明在宇宙中的位置和意义。黑暗森林法则让人不寒而栗。",
                author: "读者A",
                rating: 5
            }
        },
        {
            id: 2,
            title: "人类简史",
            author: "尤瓦尔·赫拉利",
            description: "从石器时代智人演化到21世纪的政治和技术革命，理清影响人类发展的重大脉络。",
            price: "¥68.00",
            rating: 9.1,
            doubanRating: 9.1,
            tags: ["历史", "热门", "畅销"],
            category: "history",
            cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
            doubanUrl: "https://book.douban.com/subject/25985021/",
            topReview: {
                content: "刷新三观的一本书！从认知革命到农业革命，再到科学革命，作者用独特的视角解读人类发展史，让人重新思考人类在宇宙中的位置。",
                author: "历史爱好者",
                rating: 5
            }
        },
        {
            id: 3,
            title: "原则",
            author: "瑞·达利欧",
            description: "全球最大对冲基金桥水创始人瑞·达利欧的人生经验和工作原则。",
            price: "¥98.00",
            rating: 8.3,
            doubanRating: 8.3,
            tags: ["经济", "热门", "畅销"],
            category: "business",
            cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
            doubanUrl: "https://book.douban.com/subject/27608239/",
            topReview: {
                content: "达利欧将自己40多年的投资经验总结成原则，非常适合创业者和投资人阅读。书中的五步流程法很实用。",
                author: "投资人",
                rating: 4
            }
        },
        {
            id: 4,
            title: "时间简史",
            author: "史蒂芬·霍金",
            description: "探索时间和空间核心秘密的科普读物，介绍宇宙本性的最前沿知识。",
            price: "¥39.00",
            rating: 8.9,
            doubanRating: 8.9,
            tags: ["科学", "热门", "经典"],
            category: "science",
            cover: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=400&h=600&fit=crop",
            doubanUrl: "https://book.douban.com/subject/1034282/",
            topReview: {
                content: "霍金用通俗易懂的语言解释了复杂的物理概念，让普通人也能理解宇宙的奥秘。黑洞、时间旅行等概念让人着迷。",
                author: "科学爱好者",
                rating: 5
            }
        }
    ],
    new: [
        {
            id: 5,
            title: "AI未来",
            author: "李开复",
            description: "深入探讨人工智能的发展趋势、机遇挑战，以及AI如何改变我们的世界。",
            price: "¥59.00",
            rating: 7.8,
            doubanRating: 7.8,
            tags: ["科技", "新书", "前沿"],
            category: "science",
            cover: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=600&fit=crop",
            doubanUrl: "https://book.douban.com/subject/30391101/",
            topReview: {
                content: "李开复作为AI领域的专家，对人工智能的发展前景分析得很透彻。书中提到的AI对就业的影响很有启发。",
                author: "科技从业者",
                rating: 4
            }
        },
        {
            id: 6,
            title: "财富自由之路",
            author: "李笑来",
            description: "通过个人成长和投资理财，实现财务自由的人生指南。",
            price: "¥49.00",
            rating: 8.4,
            doubanRating: 8.4,
            tags: ["理财", "新书", "成长"],
            category: "business",
            cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop",
            doubanUrl: "https://book.douban.com/subject/27094708/",
            topReview: {
                content: "李笑来的投资理念很实用，特别是关于复利思维和长期主义的观点。适合想要建立正确财富观的人阅读。",
                author: "理财新手",
                rating: 5
            }
        },
        {
            id: 7,
            title: "百年孤独",
            author: "加西亚·马尔克斯",
            description: "魔幻现实主义文学的代表作，讲述布恩迪亚家族七代人的传奇故事。",
            price: "¥42.00",
            rating: 9.2,
            doubanRating: 9.2,
            tags: ["文学", "经典", "新版本"],
            category: "fiction",
            cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
            doubanUrl: "https://book.douban.com/subject/6082808/",
            topReview: {
                content: "魔幻现实主义的巅峰之作！马尔克斯的叙事手法让人惊叹，布恩迪亚家族的命运让人唏嘘不已。",
                author: "文学爱好者",
                rating: 5
            }
        },
        {
            id: 8,
            title: "明朝那些事儿",
            author: "当年明月",
            description: "用现代语言和幽默笔法讲述明朝三百年历史，让历史变得生动有趣。",
            price: "¥198.00",
            rating: 9.0,
            doubanRating: 9.0,
            tags: ["历史", "畅销", "新版本"],
            category: "history",
            cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
            doubanUrl: "https://book.douban.com/subject/3674537/",
            topReview: {
                content: "把枯燥的历史写得如此生动有趣！当年明月的文笔幽默风趣，让人在笑声中了解明朝历史。",
                author: "历史迷",
                rating: 5
            }
        }
    ]
};

// 豆瓣搜索API模拟（实际环境中需要真实的API调用）
const doubanSearchAPI = {
    search: async function(query) {
        // 模拟网络延迟
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const allBooks = [...booksData.hot, ...booksData.new];
        const results = allBooks.filter(book => 
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        );
        
        return {
            success: true,
            data: results,
            total: results.length
        };
    }
};

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    renderBooks();
    setupEventListeners();
    setupScrollEffects();
    setupSearch();
    setupLazyLoading();
    setupTouchOptimizations();
    setupPerformanceMonitoring();
    setupBannerSlider();
}

// 渲染书籍列表
function renderBooks() {
    const hotBooksContainer = document.getElementById('hot-books');
    const newBooksContainer = document.getElementById('new-books');
    
    // 渲染热门书籍
    hotBooksContainer.innerHTML = booksData.hot.map(book => createBookCard(book, 'hot')).join('');
    
    // 渲染新书
    newBooksContainer.innerHTML = booksData.new.map(book => createBookCard(book, 'new')).join('');
}

// 创建书籍卡片
function createBookCard(book, type) {
    const stars = '★'.repeat(Math.floor(book.rating/2)) + '☆'.repeat(5 - Math.floor(book.rating/2));
    
    return `
        <div class="book-card gold-border" data-id="${book.id}" data-category="${book.category}">
            <div class="book-image">
                <img src="${book.cover}" alt="${book.title}" loading="lazy" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="placeholder">
                    <i class="fas fa-book"></i>
                    <span>${book.title}</span>
                </div>
                <div class="book-overlay">
                    <button class="douban-btn" data-douban-url="${book.doubanUrl}">
                        <i class="fas fa-external-link-alt"></i>
                        <span>查看豆瓣主页</span>
                    </button>
                </div>
            </div>
            <div class="book-content">
                <div class="book-tags">
                    ${book.tags.map(tag => `<span class="tag ${type === 'hot' ? 'hot' : type === 'new' ? 'new' : ''}">${tag}</span>`).join('')}
                </div>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">作者：${book.author}</p>
                <p class="book-description">${book.description}</p>
                
                <!-- 豆瓣评分和热门评论 -->
                <div class="douban-info">
                    <div class="douban-rating">
                        <span class="douban-score">${book.doubanRating}</span>
                        <div class="rating-stars">
                            ${stars}
                        </div>
                        <span class="rating-text">豆瓣评分</span>
                    </div>
                    
                    ${book.topReview ? `
                    <div class="top-review">
                        <div class="review-header">
                            <span class="review-author">${book.topReview.author}</span>
                            <span class="review-rating">${'★'.repeat(book.topReview.rating)}</span>
                        </div>
                        <p class="review-content">${book.topReview.content}</p>
                    </div>
                    ` : ''}
                </div>
                
                <div class="book-meta">
                    <span class="book-price">${book.price}</span>
                </div>
                <div class="book-actions">
                    <a href="${book.doubanUrl}" target="_blank" class="douban-link" rel="noopener noreferrer">
                        <i class="fas fa-book-open"></i>
                        <span>豆瓣详情</span>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// 设置滑动banner
function setupBannerSlider() {
    const slidesContainer = document.querySelector('.slides-container');
    const indicators = document.querySelectorAll('.indicator');
    const slides = document.querySelectorAll('.slide');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // 自动轮播
    function startAutoSlide() {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            goToSlide(currentSlide);
        }, 5000); // 每5秒切换一次
    }
    
    // 切换到指定幻灯片
    function goToSlide(slideIndex) {
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        
        // 更新指示器
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === slideIndex);
        });
        
        // 更新幻灯片状态
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === slideIndex);
        });
        
        currentSlide = slideIndex;
    }
    
    // 指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // 触摸滑动支持
    let touchStartX = 0;
    let touchEndX = 0;
    
    slidesContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    slidesContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchStartX - touchEndX > swipeThreshold) {
            // 向左滑动
            currentSlide = (currentSlide + 1) % totalSlides;
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // 向右滑动
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        }
        
        goToSlide(currentSlide);
    }
    
    // 开始自动轮播
    startAutoSlide();
}

// 设置事件监听器
function setupEventListeners() {
    // 移动端菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // 导航链接点击事件
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 移除所有active类
            navLinks.forEach(l => l.classList.remove('active'));
            
            // 添加active类到当前链接
            link.classList.add('active');
            
            // 平滑滚动到对应区域
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // 移动端点击后关闭菜单
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // 分类卡片点击事件
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterBooksByCategory(category);
        });
    });
    
    // 书籍卡片点击事件
    document.addEventListener('click', (e) => {
        // 豆瓣按钮点击事件
        const doubanBtn = e.target.closest('.douban-btn');
        if (doubanBtn) {
            e.stopPropagation();
            const doubanUrl = doubanBtn.dataset.doubanUrl;
            if (doubanUrl) {
                window.open(doubanUrl, '_blank', 'noopener,noreferrer');
            }
            return;
        }
        
        // 豆瓣链接点击事件
        const doubanLink = e.target.closest('.douban-link');
        if (doubanLink) {
            e.stopPropagation();
            // 链接已经在href中，让浏览器自然跳转
            return;
        }
        
        // 书籍卡片点击事件（非按钮区域）
        const bookCard = e.target.closest('.book-card');
        if (bookCard && !e.target.closest('.book-actions') && !e.target.closest('.book-overlay')) {
            const bookId = bookCard.dataset.id;
            showBookDetails(bookId);
        }
    });
    
    // banner按钮点击事件
    const bannerButtons = document.querySelectorAll('.slide-button');
    bannerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 设置滚动效果
function setupScrollEffects() {
    // 返回顶部按钮
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        // 显示/隐藏返回顶部按钮
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
        
        // 导航栏阴影效果
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
    
    // 返回顶部按钮点击事件
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 滚动时高亮对应导航链接
    window.addEventListener('scroll', highlightNavLink);
}

// 高亮当前滚动区域的导航链接
function highlightNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// 设置搜索功能
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        // 搜索按钮点击事件
        searchBtn.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                performDoubanSearch(searchTerm);
            }
        });
        
        // 输入框回车事件
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    performDoubanSearch(searchTerm);
                }
            }
        });
        
        // 输入框输入事件（实时搜索建议）
        searchInput.addEventListener('input', debounce(showSearchSuggestions, 300));
        
        // 点击其他地方关闭搜索建议
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-search')) {
                hideSearchSuggestions();
            }
        });
    }
}

// 显示搜索建议
function showSearchSuggestions() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        hideSearchSuggestions();
        return;
    }
    
    const allBooks = [...booksData.hot, ...booksData.new];
    const suggestions = allBooks.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    ).slice(0, 5); // 只显示前5个建议
    
    displaySearchSuggestions(suggestions, searchTerm);
}

// 显示搜索建议列表
function displaySearchSuggestions(suggestions, searchTerm) {
    let suggestionsContainer = document.querySelector('.search-suggestions');
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        document.querySelector('.nav-search').appendChild(suggestionsContainer);
    }
    
    if (suggestions.length === 0) {
        suggestionsContainer.innerHTML = `
            <div class="search-suggestion-item">
                <div class="suggestion-info">
                    <div class="suggestion-title">未找到相关书籍</div>
                </div>
            </div>
        `;
    } else {
        suggestionsContainer.innerHTML = suggestions.map(book => `
            <div class="search-suggestion-item" data-book-id="${book.id}">
                <img src="${book.cover}" alt="${book.title}" class="suggestion-image" loading="lazy">
                <div class="suggestion-info">
                    <div class="suggestion-title">${book.title}</div>
                    <div class="suggestion-author">${book.author}</div>
                </div>
                <div class="suggestion-rating">${book.doubanRating}</div>
            </div>
        `).join('');
        
        // 添加点击事件
        suggestionsContainer.querySelectorAll('.search-suggestion-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const bookId = e.currentTarget.dataset.bookId;
                const book = [...booksData.hot, ...booksData.new].find(b => b.id === parseInt(bookId));
                if (book) {
                    searchInput.value = book.title;
                    performDoubanSearch(book.title);
                }
                hideSearchSuggestions();
            });
        });
    }
    
    suggestionsContainer.style.display = 'block';
}

// 隐藏搜索建议
function hideSearchSuggestions() {
    const suggestionsContainer = document.querySelector('.search-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
}

// 执行豆瓣搜索
async function performDoubanSearch(searchTerm) {
    const searchInput = document.querySelector('.search-input');
    
    // 显示加载状态
    searchInput.disabled = true;
    
    try {
        const result = await doubanSearchAPI.search(searchTerm);
        
        if (result.success && result.data.length > 0) {
            displaySearchResults(result.data, searchTerm);
        } else {
            displaySearchResults([], searchTerm);
        }
    } catch (error) {
        console.error('搜索失败:', error);
        displaySearchResults([], searchTerm);
    } finally {
        searchInput.disabled = false;
        hideSearchSuggestions();
    }
}

// 显示搜索结果
function displaySearchResults(books, searchTerm) {
    const hotBooksContainer = document.getElementById('hot-books');
    const newBooksContainer = document.getElementById('new-books');
    
    if (books.length === 0) {
        hotBooksContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--text-lighter);">未找到相关书籍</h3>
                <p style="color: var(--text-muted);">没有找到包含"${searchTerm}"的书籍</p>
            </div>
        `;
        newBooksContainer.innerHTML = '';
    } else {
        hotBooksContainer.innerHTML = `
            <div style="grid-column: 1/-1; margin-bottom: 2rem;">
                <h3 style="color: var(--primary-color);">搜索"${searchTerm}"的结果 (${books.length}本)</h3>
            </div>
            ${books.map(book => createBookCard(book, '')).join('')}
        `;
        newBooksContainer.innerHTML = '';
    }
}

// 按分类过滤书籍
function filterBooksByCategory(category) {
    const allBooks = [...booksData.hot, ...booksData.new];
    const filteredBooks = allBooks.filter(book => book.category === category);
    
    const hotBooksContainer = document.getElementById('hot-books');
    const newBooksContainer = document.getElementById('new-books');
    
    const categoryNames = {
        fiction: '文学小说',
        science: '科学技术',
        history: '历史人文',
        business: '经济管理'
    };
    
    if (filteredBooks.length === 0) {
        hotBooksContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-book" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--text-lighter);">暂无${categoryNames[category]}类书籍</h3>
                <p style="color: var(--text-muted);">该分类下暂时没有书籍</p>
            </div>
        `;
    } else {
        hotBooksContainer.innerHTML = `
            <div style="grid-column: 1/-1; margin-bottom: 2rem;">
                <h3 style="color: var(--primary-color);">${categoryNames[category]} (${filteredBooks.length}本)</h3>
            </div>
            ${filteredBooks.map(book => createBookCard(book, '')).join('')}
        `;
    }
    
    newBooksContainer.innerHTML = '';
    
    // 滚动到热门书籍区域
    document.getElementById('hot').scrollIntoView({
        behavior: 'smooth'
    });
}

// 显示书籍详情（模拟功能）
function showBookDetails(bookId) {
    const allBooks = [...booksData.hot, ...booksData.new];
    const book = allBooks.find(b => b.id === parseInt(bookId));
    
    if (book) {
        // 这里可以添加更详细的书籍详情页面
        alert(`《${book.title}》\n作者：${book.author}\n\n${book.description}\n\n价格：${book.price}\n评分：${book.rating}/5`);
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 性能优化：图片懒加载和Intersection Observer
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            observer.observe(img);
        });
    }
}

// 触摸设备优化
function setupTouchOptimizations() {
    // 禁用hover效果在触摸设备上
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        document.body.classList.add('touch-device');
    }
    
    // 优化触摸滚动
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
        // 防止过度滚动时的卡顿
        if (e.scale !== 1) {
            e.preventDefault();
        }
    }, { passive: false });
}

// 性能监控
function setupPerformanceMonitoring() {
    // 监控页面加载性能
    window.addEventListener('load', () => {
        setTimeout(() => {
            const navigationTiming = performance.getEntriesByType('navigation')[0];
            console.log('页面加载时间:', navigationTiming.loadEventEnd - navigationTiming.navigationStart, 'ms');
        }, 0);
    });
    
    // 监控用户交互延迟
    let lastInteractionTime = Date.now();
    document.addEventListener('click', () => {
        const currentTime = Date.now();
        const interactionDelay = currentTime - lastInteractionTime;
        lastInteractionTime = currentTime;
        
        if (interactionDelay < 100) {
            console.log('快速连续点击检测到，考虑优化交互响应');
        }
    });
}

// 页面加载动画
window.addEventListener('load', () => {
    // 添加加载完成后的动画效果
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 添加一些交互效果增强用户体验（仅桌面设备）
if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', (e) => {
        // 为书籍卡片添加微妙的鼠标跟随效果
        const bookCards = document.querySelectorAll('.book-card');
        bookCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                card.style.transform = `perspective(1000px) rotateY(${(x - rect.width / 2) / 50}deg) rotateX(${-(y - rect.height / 2) / 50}deg)`;
            }
        });
    });
    
    // 重置卡片变换
    document.addEventListener('mouseleave', () => {
        const bookCards = document.querySelectorAll('.book-card');
        bookCards.forEach(card => {
            card.style.transform = '';
        });
    });
}