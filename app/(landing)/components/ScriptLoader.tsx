'use client';

import { useEffect, useRef } from 'react';

export default function ScriptLoader() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Script loading order
    const scripts = [
      { src: '/assets/js/jquery.js', priority: 1 },
      { src: '/assets/js/bootstrap.bundle.min.js', priority: 2 },
      { src: '/assets/js/swiper-bundle.js', priority: 2 },
      { src: '/assets/js/wow.js', priority: 2 },
      { src: '/assets/js/imagesloaded-pkgd.js', priority: 2 },
      { src: '/assets/js/isotope-pkgd.js', priority: 2 },
      { src: '/assets/js/magnific-popup.js', priority: 2 },
      { src: '/assets/js/nice-select.js', priority: 2 },
      { src: '/assets/js/purecounter.js', priority: 2 },
      { src: '/assets/js/slider.js', priority: 3 },
      { src: '/assets/js/ordain-it.js', priority: 3 },
      { src: '/assets/js/main.js', priority: 4 },
    ];

    const loadedScripts: HTMLScriptElement[] = [];

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
        loadedScripts.push(script);
      });
    };

    const loadScriptsInOrder = async () => {
      try {
        // Priority 1: jQuery first
        const priority1 = scripts.filter(s => s.priority === 1);
        for (const script of priority1) {
          await loadScript(script.src);
        }

        // Wait for jQuery to be available
        await new Promise<void>((resolve) => {
          const check = setInterval(() => {
            if ((window as any).jQuery) {
              clearInterval(check);
              resolve();
            }
          }, 50);
        });

        // Priority 2: Core libraries
        const priority2 = scripts.filter(s => s.priority === 2);
        await Promise.all(priority2.map(s => loadScript(s.src)));

        // Wait for Swiper to be available
        await new Promise<void>((resolve) => {
          const check = setInterval(() => {
            if ((window as any).Swiper) {
              clearInterval(check);
              resolve();
            }
          }, 50);
        });

        // Small delay to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100));

        // Priority 3: Template scripts that depend on jQuery/Swiper
        const priority3 = scripts.filter(s => s.priority === 3);
        for (const script of priority3) {
          await loadScript(script.src);
        }

        // Priority 4: Main script
        const priority4 = scripts.filter(s => s.priority === 4);
        for (const script of priority4) {
          await loadScript(script.src);
        }

        // Initialize remaining features
        initializeFeatures();

      } catch (error) {
        console.error('Script loading error:', error);
      }
    };

    const initializeFeatures = () => {
      const $ = (window as any).jQuery;
      if (!$) return;

      try {
        // Initialize WOW.js
        if ((window as any).WOW) {
          new (window as any).WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
          }).init();
        }

        // Initialize Nice Select
        if ($.fn.niceSelect) {
          $('select').niceSelect();
        }

        // Initialize PureCounter
        if ((window as any).PureCounter) {
          new (window as any).PureCounter();
        }

        // Background image data-background
        $('[data-background]').each(function (this: any) {
          const bg = $(this).attr('data-background');
          if (bg) {
            $(this).css('background-image', 'url(' + bg + ')');
          }
        });

        // Sticky header
        $(window).on('scroll', function () {
          const scroll = $(window).scrollTop();
          if (scroll < 100) {
            $('#header-sticky').removeClass('header-sticky');
          } else {
            $('#header-sticky').addClass('header-sticky');
          }
        });

        // Menu bar toggle
        $('.it-menu-bar').on('click', function () {
          $('.itoffcanvas').addClass('opened');
          $('.body-overlay').addClass('opened');
        });

        $('.close-btn').on('click', function () {
          $('.itoffcanvas').removeClass('opened');
          $('.body-overlay').removeClass('opened');
        });

        $('.body-overlay').on('click', function () {
          $('.itoffcanvas').removeClass('opened');
          $('.body-overlay').removeClass('opened');
        });

      } catch (error) {
        console.warn('Feature initialization error:', error);
      }
    };

    loadScriptsInOrder();

    // Cleanup
    return () => {
      loadedScripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null;
}
