'use client';

import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Flower2, Mail, Home, ArrowLeft, ArrowRight } from 'lucide-react';

// Framer Motion alternative using CSS animations with more dynamic effects
const MotionDiv = ({ children, className, style, animate, initial, transition, ...props }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (animate) {
      setIsAnimating(true);
    }
  }, [animate]);

  return (
    <div 
      className={`${className} ${isAnimating ? 'animate-in' : ''}`} 
      style={style} 
      {...props}
    >
      {children}
    </div>
  );
};

export default function RumiLoveCollection() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentQuote, setCurrentQuote] = useState(0);
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const [hasExploded, setHasExploded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);

  const pages = [
    { id: 'home', title: 'Home', icon: Home, color: 'from-pink-400 via-purple-500 to-indigo-500' },
    { id: 'appreciation', title: 'Appreciation', icon: Star, color: 'from-yellow-400 via-orange-500 to-red-500' },
    { id: 'forgiveness', title: 'Forgiveness', icon: Heart, color: 'from-blue-400 via-teal-500 to-green-500' },
    { id: 'admiration', title: 'Admiration', icon: Sparkles, color: 'from-purple-400 via-pink-500 to-red-500' },
    { id: 'love', title: 'Love', icon: Flower2, color: 'from-rose-400 via-pink-500 to-purple-500' }
  ];

  const letters = {
    appreciation: {
      title: "A Letter of Appreciation",
      content: `My Dearest Rumi,

As I sit here thinking about all the wonderful moments we've shared, my heart overflows with gratitude. You are the sunshine that brightens my darkest days and the gentle breeze that soothes my troubled soul.

Your kindness knows no bounds. Every small gesture, every warm smile, every caring word you speak creates ripples of joy in my world. You have this magical ability to make the ordinary feel extraordinary, to turn simple moments into precious memories.

I appreciate how you listen with your whole heart, how you understand me even when I struggle to understand myself. Your patience with my flaws, your celebration of my victories, and your unwavering support through every challenge - these gifts are treasures beyond measure.

Thank you for being you, for choosing to share your beautiful spirit with me. You make me want to be a better person every single day.

With all my love and endless appreciation,
Abdullah ❤️`,
      theme: "appreciation",
      bgColor: "from-yellow-400 via-orange-500 to-red-500"
    },
    forgiveness: {
      title: "A Letter of Forgiveness",
      content: `My Beloved Rumi,

If there are moments when I've fallen short, when my words weren't as gentle as they should have been, or when I didn't show you the love you deserve, I ask for your forgiveness.

Love isn't about being perfect - it's about growing together, learning together, and choosing each other again and again. We are both human, beautifully imperfect, walking this journey of life hand in hand.

I forgive every moment of doubt, every small misunderstanding, every time we didn't see eye to eye. These experiences have only made our bond stronger, teaching us the true meaning of unconditional love.

In your eyes, I see compassion. In your heart, I find forgiveness. And in your love, I discover the courage to be vulnerable, to be real, to be completely myself.

Let's continue to choose love over pride, understanding over judgment, and forgiveness over resentment. Together, we can weather any storm.

Forever yours with a humble heart,
Abdullah ❤️`,
      theme: "forgiveness",
      bgColor: "from-blue-400 via-teal-500 to-green-500"
    },
    admiration: {
      title: "A Letter of Admiration",
      content: `My Extraordinary Rumi,

I am in awe of you. Every day, you amaze me with your strength, your grace, and your incredible spirit. You are a masterpiece painted by the hands of the divine.

I admire your courage - how you face challenges with determination and hope. I admire your compassion - how you treat everyone with kindness and respect. I admire your intelligence - how you see the world with such clarity and wisdom.

Your laughter is music to my soul, your tears move me to action, and your dreams inspire me to reach for the stars. You have this incredible ability to find beauty in the smallest things and to spread that beauty wherever you go.

The way you love is breathtaking. It's pure, honest, and transformative. You don't just say you care - you show it in a thousand little ways that make my heart sing.

I admire how you've grown, how you continue to evolve into an even more amazing version of yourself. Watching you bloom is one of life's greatest privileges.

You are phenomenal, and I am so proud to call you mine.

With infinite admiration,
Abdullah ❤️`,
      theme: "admiration",
      bgColor: "from-purple-400 via-pink-500 to-red-500"
    },
    love: {
      title: "A Letter of Pure Love",
      content: `My Darling Rumi,

Words feel inadequate when I try to express the depth of my love for you. You are not just my partner - you are my heart walking outside my body, my soul's perfect match.

I love you in ways I never knew were possible. I love you in the morning when you're still sleepy and beautiful, I love you in the evening when you share your dreams with me. I love you in your moments of strength and in your moments of vulnerability.

You have taught me that love isn't just a feeling - it's a choice we make every day. And every day, I choose you. I choose us. I choose this beautiful, messy, wonderful journey we're on together.

In your arms, I've found my home. In your eyes, I've found my future. In your heart, I've found my peace. You are my yesterday, my today, and all of my tomorrows.

I promise to love you fiercely and gently, to support your dreams, to celebrate your victories, and to stand by you through every season of life. You are my forever, my always, my everything.

Until the stars stop shining and beyond,
Abdullah ❤️

P.S. - Thank you for choosing to love me back. It's the greatest gift I've ever received.`,
      theme: "love",
      bgColor: "from-rose-400 via-pink-500 to-purple-500"
    }
  };

  const quotes = [
    // Personal messages from Abdullah
    {
      text: "I love you, Rumi. Thank you for everything you do for me.",
      author: "Abdullah ❤️",
      isPersonal: true
    },
    {
      text: "You make every day brighter just by being in my life, Rumi.",
      author: "Abdullah ❤️",
      isPersonal: true
    },
    {
      text: "Thank you for being my everything, my love, my best friend.",
      author: "Abdullah ❤️",
      isPersonal: true
    },
    {
      text: "Rumi, you are the most beautiful thing that ever happened to me.",
      author: "Abdullah ❤️",
      isPersonal: true
    },
    {
      text: "I am so grateful to have you in my life. I love you endlessly.",
      author: "Abdullah ❤️",
      isPersonal: true
    },
    {
      text: "You are my heart, my soul, my forever. Thank you for loving me.",
      author: "Abdullah ❤️",
      isPersonal: true
    },
    // Original thank you messages
    {
      text: "Thank you for everything, Rumi. You are my universe, my everything.",
      author: "Your Forever Love",
      isThankYou: true
    },
    {
      text: "Thank you for all the love, joy, and happiness you bring to my life.",
      author: "Your Devoted Heart",
      isThankYou: true
    },
    {
      text: "Rumi, thank you for being the light that guides me through every day.",
      author: "Your Grateful Soul",
      isThankYou: true
    },
    {
      text: "Thank you for choosing me, for loving me, for being perfectly you.",
      author: "Your Lucky One",
      isThankYou: true
    },
    // Classic romantic quotes
    {
      text: "She walks in beauty, like the night of cloudless climes and starry skies.",
      author: "Lord Byron"
    },
    {
      text: "You are my sun, my moon, and all my stars.",
      author: "E.E. Cummings"
    },
    {
      text: "In your eyes, I see the reflection of my soul and the promise of forever.",
      author: "Unknown"
    },
    {
      text: "Beauty is not in the face; beauty is a light in the heart.",
      author: "Kahlil Gibran"
    },
    {
      text: "You are the poetry written in the language of my heart.",
      author: "Anonymous"
    },
    {
      text: "To love and be loved is to feel the sun from both sides.",
      author: "David Viscott"
    },
    {
      text: "Your beauty illuminates the darkest corners of my world.",
      author: "Unknown"
    },
    {
      text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls.",
      author: "Maya Angelou"
    },
    {
      text: "You are my heart, my life, my one and only thought.",
      author: "Arthur Conan Doyle"
    }
  ];

  // Navigation functions
  const goToPage = (pageId) => {
    setCurrentPage(pageId);
    setLetterVisible(false);
    setTimeout(() => setLetterVisible(true), 300);
  };

  const getCurrentPageIndex = () => pages.findIndex(p => p.id === currentPage);
  
  const goToNextPage = () => {
    const currentIndex = getCurrentPageIndex();
    const nextIndex = (currentIndex + 1) % pages.length;
    goToPage(pages[nextIndex].id);
  };

  const goToPrevPage = () => {
    const currentIndex = getCurrentPageIndex();
    const prevIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
    goToPage(pages[prevIndex].id);
  };

  // Initial BOOM explosion effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasExploded(true);
      // Create massive explosion of elements
      const explosionElements = [];
      
      // Generate explosion hearts
      for (let i = 0; i < 30; i++) {
        explosionElements.push({
          id: `explosion-heart-${i}`,
          type: 'heart',
          left: 50 + (Math.random() - 0.5) * 100,
          top: 50 + (Math.random() - 0.5) * 100,
          size: Math.random() * 30 + 20,
          delay: Math.random() * 0.5,
          color: ['text-pink-400', 'text-red-400', 'text-rose-400', 'text-purple-400', 'text-yellow-400'][Math.floor(Math.random() * 5)]
        });
      }
      
      // Generate explosion flowers
      for (let i = 0; i < 20; i++) {
        explosionElements.push({
          id: `explosion-flower-${i}`,
          type: 'flower',
          left: 50 + (Math.random() - 0.5) * 80,
          top: 50 + (Math.random() - 0.5) * 80,
          size: Math.random() * 25 + 15,
          delay: Math.random() * 0.3,
          color: ['text-pink-500', 'text-rose-500', 'text-red-500', 'text-purple-500'][Math.floor(Math.random() * 4)]
        });
      }

      // Generate explosion sparkles
      for (let i = 0; i < 25; i++) {
        explosionElements.push({
          id: `explosion-sparkle-${i}`,
          type: 'sparkle',
          left: 50 + (Math.random() - 0.5) * 120,
          top: 50 + (Math.random() - 0.5) * 120,
          size: Math.random() * 20 + 10,
          delay: Math.random() * 0.4,
          color: 'text-yellow-300'
        });
      }

      setHearts(prev => [...prev, ...explosionElements.filter(e => e.type === 'heart')]);
      setFlowers(prev => [...prev, ...explosionElements.filter(e => e.type === 'flower')]);
      setSparkles(prev => [...prev, ...explosionElements.filter(e => e.type === 'sparkle')]);
      
      // Show content after explosion
      setTimeout(() => {
        setShowContent(true);
        setLetterVisible(true);
      }, 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Continuous floating elements after explosion
  useEffect(() => {
    if (!hasExploded) return;

    const generateHeart = () => ({
      id: `heart-${Math.random()}`,
      type: 'heart',
      left: Math.random() * 95,
      size: Math.random() * 25 + 15,
      duration: Math.random() * 4 + 5,
      delay: Math.random() * 2,
      color: ['text-pink-400', 'text-red-400', 'text-rose-400', 'text-purple-400'][Math.floor(Math.random() * 4)]
    });

    const generateFlower = () => ({
      id: `flower-${Math.random()}`,
      type: 'flower',
      left: Math.random() * 95,
      size: Math.random() * 20 + 12,
      duration: Math.random() * 5 + 6,
      delay: Math.random() * 2,
      color: ['text-pink-500', 'text-rose-500', 'text-red-500'][Math.floor(Math.random() * 3)]
    });

    const generateSparkle = () => ({
      id: `sparkle-${Math.random()}`,
      type: 'sparkle',
      left: Math.random() * 95,
      top: Math.random() * 95,
      size: Math.random() * 15 + 8,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 4
    });

    const heartInterval = setInterval(() => {
      setHearts(prev => {
        const newHearts = [...prev.slice(-15), generateHeart()];
        return newHearts;
      });
    }, 800);

    const flowerInterval = setInterval(() => {
      setFlowers(prev => {
        const newFlowers = [...prev.slice(-10), generateFlower()];
        return newFlowers;
      });
    }, 1200);

    const sparkleInterval = setInterval(() => {
      setSparkles(prev => {
        const newSparkles = [...prev.slice(-12), generateSparkle()];
        return newSparkles;
      });
    }, 1000);

    return () => {
      clearInterval(heartInterval);
      clearInterval(flowerInterval);
      clearInterval(sparkleInterval);
    };
  }, [hasExploded]);

  useEffect(() => {
    if (!showContent || currentPage !== 'home') return;
    
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [showContent, currentPage]);

  if (!hasExploded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-bold text-white animate-pulse-slow mb-8">
            💖
          </div>
          <div className="text-2xl text-white/80 animate-bounce">
            Loading something special...
          </div>
        </div>
      </div>
    );
  }

  const currentBgColor = currentPage === 'home' 
    ? 'from-pink-400 via-purple-500 via-indigo-500 to-pink-500'
    : pages.find(p => p.id === currentPage)?.color || 'from-pink-400 via-purple-500 to-indigo-500';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentBgColor} relative overflow-x-hidden transition-all duration-1000`}>
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-tr from-yellow-300/20 via-transparent to-purple-600/20 animate-pulse"></div>

      {/* Navigation */}
      <div className="fixed top-4 left-4 right-4 z-50 flex justify-center">
        <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 flex space-x-4 border border-white/20">
          {pages.map((page) => {
            const IconComponent = page.icon;
            return (
              <button
                key={page.id}
                onClick={() => goToPage(page.id)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentPage === page.id 
                    ? 'bg-white/30 text-white scale-110' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title={page.title}
              >
                <IconComponent size={20} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Page Navigation Arrows */}
      <button 
        onClick={goToPrevPage}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/10 backdrop-blur-xl rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ArrowLeft size={24} />
      </button>
      
      <button 
        onClick={goToNextPage}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/10 backdrop-blur-xl rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ArrowRight size={24} />
      </button>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {hearts.map((heart) => (
          <MotionDiv
            key={heart.id}
            className="absolute"
            style={{
              left: `${heart.left}%`,
              top: heart.top ? `${heart.top}%` : 'auto',
              bottom: heart.top ? 'auto' : '-50px',
              animation: heart.top 
                ? `explosionBurst 2s ease-out ${heart.delay}s both, float 3s ease-in-out infinite ${heart.delay + 2}s`
                : `heartFloat ${heart.duration}s infinite linear ${heart.delay}s, heartPulse 2s infinite`,
              fontSize: `${heart.size}px`
            }}
          >
            <Heart 
              className={`${heart.color} fill-current filter drop-shadow-lg`}
            />
          </MotionDiv>
        ))}
      </div>

      {/* Floating Flowers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {flowers.map((flower) => (
          <MotionDiv
            key={flower.id}
            className="absolute"
            style={{
              left: `${flower.left}%`,
              top: flower.top ? `${flower.top}%` : 'auto',
              bottom: flower.top ? 'auto' : '-50px',
              animation: flower.top 
                ? `explosionBurst 2.5s ease-out ${flower.delay}s both, float 4s ease-in-out infinite ${flower.delay + 2.5}s`
                : `flowerFloat ${flower.duration}s infinite linear ${flower.delay}s`,
              fontSize: `${flower.size}px`
            }}
          >
            <Flower2 
              className={`${flower.color} animate-spin-slow filter drop-shadow-lg`}
            />
          </MotionDiv>
        ))}
      </div>

      {/* Floating Sparkles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((sparkle) => (
          <MotionDiv
            key={sparkle.id}
            className="absolute"
            style={{
              left: `${sparkle.left}%`,
              top: sparkle.top ? `${sparkle.top}%` : Math.random() * 100 + '%',
              animation: sparkle.top 
                ? `explosionBurst 1.8s ease-out ${sparkle.delay}s both, sparkleFloat 3s ease-in-out infinite ${sparkle.delay + 1.8}s`
                : `sparkleFloat ${sparkle.duration}s infinite ease-in-out ${sparkle.delay}s`
            }}
          >
            <Sparkles 
              className="text-yellow-300 animate-spin"
              size={sparkle.size}
              style={{ filter: 'drop-shadow(0 0 6px rgba(253, 224, 71, 0.6))' }}
            />
          </MotionDiv>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-20">
        
        {/* Home Page */}
        {currentPage === 'home' && (
          <div>
            {/* Title Section */}
            <MotionDiv 
              className={`text-center pt-12 pb-8 px-4 ${showContent ? 'animate-bombEntry' : 'opacity-0'}`}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 animate-rainbow-text">
                RUMI
              </h1>
              <div className="flex justify-center space-x-1 sm:space-x-2 flex-wrap">
                {[...Array(7)].map((_, i) => (
                  <Star 
                    key={i}
                    className="text-yellow-300 fill-current animate-twinkle w-4 h-4 sm:w-6 sm:h-6"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </MotionDiv>

            {/* Quote Section */}
            <div className="px-4 sm:px-6 lg:px-8 pb-12">
              <div className="max-w-4xl xl:max-w-5xl mx-auto">
                <MotionDiv 
                  className={`relative ${showContent ? 'animate-slideUpFade' : 'opacity-0'}`}
                  style={{ animationDelay: '0.5s' }}
                >
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-white/15 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-white/30 animate-glow"></div>
                  
                  {/* Quote content */}
                  <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 text-center min-h-[300px] sm:min-h-[350px] flex flex-col justify-center">
                    <MotionDiv 
                      key={currentQuote}
                      className="animate-slideInFade"
                    >
                      {/* Decorative hearts */}
                      <div className="flex justify-center mb-4 sm:mb-6 space-x-2 sm:space-x-4">
                        <Heart className="text-pink-300 fill-current w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
                        <Heart className="text-red-400 fill-current w-8 h-8 sm:w-10 sm:h-10 animate-bounce mx-2 sm:mx-4" style={{ animationDelay: '0.2s' }} />
                        <Heart className="text-pink-300 fill-current w-6 h-6 sm:w-8 sm:h-8 animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </div>

                      {/* <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-6 sm:mb-8 leading-relaxed italic font-serif drop-shadow-lg ${
                        quotes[currentQuote].isPersonal ? 'text-yellow-200' : 
                        quotes[currentQuote].isThankYou ? 'text-rose-200' : 'text-white'
                      }`}>
                        "{quotes[currentQuote].text}"
                      </p> */}
                      <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-6 sm:mb-8 leading-relaxed italic font-serif drop-shadow-lg ${
  quotes[currentQuote].isPersonal ? 'text-yellow-200' : 
  quotes[currentQuote].isThankYou ? 'text-rose-200' : 'text-white'
}`}>
  &ldquo;{quotes[currentQuote].text}&rdquo;
</p>
                      <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
                        <div className={`w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 rounded-full ${
                          quotes[currentQuote].isPersonal 
                            ? 'bg-gradient-to-r from-transparent via-yellow-300 to-transparent' 
                            : quotes[currentQuote].isThankYou
                            ? 'bg-gradient-to-r from-transparent via-rose-300 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-pink-300 to-transparent'
                        }`}></div>
                        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-wide ${
                          quotes[currentQuote].isPersonal ? 'text-yellow-100' : 
                          quotes[currentQuote].isThankYou ? 'text-rose-100' : 'text-pink-100'
                        }`}>
                          — {quotes[currentQuote].author}
                        </p>
                        <div className={`w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 rounded-full ${
                          quotes[currentQuote].isPersonal 
                            ? 'bg-gradient-to-r from-transparent via-yellow-300 to-transparent' 
                            : quotes[currentQuote].isThankYou
                            ? 'bg-gradient-to-r from-transparent via-rose-300 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-pink-300 to-transparent'
                        }`}></div>
                      </div>

                      {/* Bottom decoration */}
                      <div className="flex justify-center space-x-1 sm:space-x-2 lg:space-x-3">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                      </div>
                    </MotionDiv>
                  </div>
                </MotionDiv>
              </div>
            </div>

            {/* Heart decoration at bottom */}
            <MotionDiv 
              className={`text-center pb-8 sm:pb-12 ${showContent ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: '1s' }}
            >
              <div className="flex justify-center items-center space-x-2 sm:space-x-4 lg:space-x-6 flex-wrap">
                {[...Array(9)].map((_, i) => (
                  <Heart 
                    key={i}
                    className="text-pink-300 fill-current animate-heartBeat m-1"
                    size={i === 4 ? 32 : 20}
                    style={{ 
                      animationDelay: `${i * 0.2}s`,
                      filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.6))'
                    }}
                  />
                ))}
              </div>
            </MotionDiv>
          </div>
        )}

        {/* Letter Pages */}
        {currentPage !== 'home' && letters[currentPage] && (
          <div className={`px-4 sm:px-6 lg:px-8 ${letterVisible ? 'animate-letterSlideIn' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto">
              {/* Letter Header */}
              <div className="text-center mb-8">
                <Mail className="w-16 h-16 mx-auto mb-4 text-white animate-bounce" />
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 animate-rainbow-text">
                  {letters[currentPage].title}
                </h2>
                <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
              </div>

              {/* Letter Content */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-2 border-white/20 shadow-2xl animate-glow">
                <div className="bg-white/80 rounded-2xl p-8 sm:p-12 text-gray-800 shadow-inner">
                  <div className="animate-letterFade">
                    <pre className="whitespace-pre-wrap text-base sm:text-lg leading-relaxed font-serif">
                      {letters[currentPage].content}
                    </pre>
                  </div>
                  
                  {/* Letter decorations */}
                  <div className="flex justify-center mt-8 space-x-4">
                    <Heart className="text-red-400 fill-current animate-heartBeat" size={24} />
                    <Sparkles className="text-yellow-500 animate-spin-slow" size={20} />
                    <Heart className="text-pink-400 fill-current animate-heartBeat" size={24} style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional floating decorations */}
        <div className="fixed top-6 sm:top-12 left-6 sm:left-12 animate-float pointer-events-none">
          <div className="text-4xl sm:text-6xl animate-spin-slow">💖</div>
        </div>
        <div className="fixed bottom-6 sm:bottom-12 right-6 sm:right-12 animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
          <div className="text-3xl sm:text-5xl animate-bounce">🌟</div>
        </div>
        <div className="fixed top-1/3 right-8 sm:right-16 animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
          <div className="text-3xl sm:text-4xl">🌹</div>
        </div>
        <div className="fixed bottom-1/3 left-8 sm:left-16 animate-float pointer-events-none" style={{ animationDelay: '3s' }}>
          <div className="text-4xl sm:text-5xl">✨</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes explosionBurst {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
            transform: scale(1.5) rotate(90deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 0.8;
          }
        }

        @keyframes bombEntry {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes slideUpFade {
          0% {
            transform: translateY(100px) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes letterSlideIn {
          0% {
            transform: translateX(-100px) rotate(-5deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes letterFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heartFloat {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes flowerFloat {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0.3);
            opacity: 0;
          }
          15% {
            opacity: 1;
            transform: scale(1);
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(720deg) scale(0.3);
            opacity: 0;
          }
        }
        
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes slideInFade {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(244, 114, 182, 0.3);
          }
        }
        
        @keyframes rainbow-text {
          0% { color: #ff6b6b; }
          16% { color: #4ecdc4; }
          32% { color: #45b7d1; }
          48% { color: #96ceb4; }
          64% { color: #ffeaa7; }
          80% { color: #dda0dd; }
          100% { color: #ff6b6b; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .animate-slideInFade {
          animation: slideInFade 1s ease-out;
        }
        
        .animate-bombEntry {
          animation: bombEntry 1.5s ease-out both;
        }

        .animate-slideUpFade {
          animation: slideUpFade 1.2s ease-out both;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-rainbow-text {
          animation: rainbow-text 3s ease-in-out infinite;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-heartBeat {
          animation: heartBeat 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-letterSlideIn {
          animation: letterSlideIn 1.2s ease-out both;
        }

        .animate-letterFade {
          animation: letterFade 2s ease-out 0.5s both;
        }

        /* Responsive scroll behavior */
        @media (max-width: 640px) {
          body {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
}
