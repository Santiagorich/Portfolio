import { scroller, Events } from "react-scroll";
import { useEffect, useState, useRef } from "react";
import _ from "lodash";
import {
  SplideContext,
  SectionContext,
  OnScrollContext,
} from "../utils/contexts";

var currentSection = 0;

export default function SectionsWrapper(props) {
  let {
    scrollables = [],
    splideScrollable = [],
    sections,
    splides,
    whiteSections = [],
    whiteSectionColor,
    setSection,
  } = props;
  const scrollDuration = 500;
  const cooldown = 800;
  const [currentSplide, setCurrentSplide] = useState(0);
  const [onScroll, setOnScroll] = useState([]);
  const clearColor = whiteSectionColor ? whiteSectionColor : "white";
  const wheelEvent = useRef(null);
  const scrollLock = useRef(false);

  const scrollToSection = (sectionIndex) => {
    scroller.scrollTo(`section-${sectionIndex}`, {
      duration: scrollDuration,
      smooth: "easeInOutQuart",
      ignoreCancelEvents: true,
    });
  };

  const handleScroll = (deltaY, splide) => {
    if (deltaY < 0) {
      if (splide) {
        handleScrollable("up");
      } else {
        scrollUp();
      }
    } else {
      if (splide) {
        handleScrollable("down");
      } else {
        scrollDown();
      }
    }
  };
  const onScrollHandler = (deltaY) => {
    if (!scrollLock.current) {
      scrollLock.current = true;
      const splide = splideScrollable.includes(currentSection);
      handleScroll(deltaY, splide);
      setTimeout(() => {
        scrollLock.current = false;
      }, cooldown);
    }
  };

  const handleScrollableSections = (e) => {
    const section = document.getElementById(`section-${currentSection}`);
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const isSection = e.target === section;
    const isScrollableElement = !isSection && e.target.closest('.scrollable') !== null;

    if (!scrollables.includes(currentSection) || isSection) {
      document.body.style.overflow = "hidden";
      e.preventDefault();
      if (wheelEvent.current === null) {
        wheelEvent.current = e;
        requestAnimationFrame(() => {
          onScrollHandler(e.deltaY);
          wheelEvent.current = null;
        });
      }
    } else {
      document.body.style.overflow = "auto";

      const scrollableChild = e.target.closest('.scrollable');

      if (isScrollableElement) {
        const scrollTop = scrollableChild.scrollTop;
        const scrollHeight = scrollableChild.scrollHeight;
        const clientHeight = scrollableChild.clientHeight;
        const atTopBoundary = scrollTop === 0;
        const atBottomBoundary = scrollTop + clientHeight >= scrollHeight;

        if ((atTopBoundary && e.deltaY < 0) || (atBottomBoundary && e.deltaY > 0)) {
          const section = document.getElementById(`section-${currentSection}`);
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;
          const sectionInView = sectionTop >= 0 && sectionBottom <= window.innerHeight;

          if (sectionInView) {
            e.preventDefault();
            if (wheelEvent.current === null) {
              wheelEvent.current = e;
              requestAnimationFrame(() => {
                onScrollHandler(e.deltaY);
                wheelEvent.current = null;
              });
            }
          } else if ((atTopBoundary && e.deltaY < 0) || (atBottomBoundary && e.deltaY > 0)) {
            const newEvent = new WheelEvent('wheel', e);
            e.target.parentNode.dispatchEvent(newEvent);
          }
        }

      } else if (sectionTop < 0 && sectionBottom > window.innerHeight) {
        document.body.style.overflow = "auto";
      } else {
        handleBoundaryScroll(sectionTop, sectionBottom, e);
      }

    }
  };

  const handleBoundaryScroll = (sectionTop, sectionBottom, e) => {
    if (sectionBottom <= window.innerHeight && e.deltaY > 0) {
      document.body.style.overflow = "hidden";
      e.preventDefault();
      if (wheelEvent.current === null) {
        wheelEvent.current = e;
        requestAnimationFrame(() => {
          onScrollHandler(e.deltaY);
          wheelEvent.current = null;
        });
      }
    }
    if (sectionTop >= 0 && e.deltaY < 0) {
      document.body.style.overflow = "hidden";
      e.preventDefault();
      if (wheelEvent.current === null) {
        wheelEvent.current = e;
        requestAnimationFrame(() => {
          onScrollHandler(e.deltaY);
          wheelEvent.current = null;
        });
      }
    }
  };



  useEffect(() => {
    setCurrentSection(0);
    scrollToSection(0);
    window.addEventListener("wheel", handleScrollableSections, {
      passive: false,
    });
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("wheel", handleScrollableSections);
      window.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "auto";
    };
  }, []);


  useEffect(() => {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.register('begin', (to, element) => {
      onScroll.forEach(callback => {
        callback(to, element);
      });
    })
  }, [onScroll]);

  const addToOnScroll = (callback) => {
    const newCallbacks = onScroll;
    newCallbacks.push(callback);
    setOnScroll(newCallbacks);
  }

  const setCurrentSection = (number) => {
    currentSection = number;
    setSection && setSection(currentSection);
    whiteSections.includes(currentSection) ? document?.body?.classList.add(clearColor) : document?.body?.classList.remove(clearColor);
  };

  const scrollUp = () => {
    if (currentSection - 1 >= 0) {
      currentSection--;
      setSection && setSection(currentSection);
      whiteSections.includes(currentSection) ? document?.body?.classList.add(clearColor) : document?.body?.classList.remove(clearColor);
      scroller.scrollTo(`section-${currentSection}`, {
        duration: scrollDuration,
        smooth: "easeInOutQuart",
        ignoreCancelEvents: true
      });
    }
  };

  const scrollDown = () => {
    if (currentSection < sections - 1) {
      currentSection++;
      setSection && setSection(currentSection);
      whiteSections.includes(currentSection) ? document?.body?.classList.add(clearColor) : document?.body?.classList.remove(clearColor);
      scroller.scrollTo(`section-${currentSection}`, {
        duration: scrollDuration,
        smooth: "easeInOutQuart",
        ignoreCancelEvents: true,
      });
    }
  };

  const handleScrollable = (direction = null) => {
    if (direction === "up") {
      setCurrentSplide((currentSplide) => {
        {
          if (currentSplide - 1 >= 0) {
            return currentSplide - 1;
          }
          else {
            scrollUp();
            return currentSplide;
          }
        }
      });
    }
    if (direction === "down") {
      setCurrentSplide((currentSplide) => {
        if (currentSplide < splides - 1) {
          return currentSplide + 1;
        }
        else {
          scrollDown();
          return currentSplide;
        }
      });
    }
  }

  const handleWheel = (e) => {
    if (!scrollables.includes(currentSection)) {
      document.body.style.overflow = "hidden";
      e.preventDefault();
      if (e.deltaY < 0) {
        if (splideScrollable.indexOf(currentSection) != -1) {
          handleScrollableDebounced("up");
        } else {
          scrollUp();
        }
      } else {
        if (splideScrollable.indexOf(currentSection) != -1) {
          handleScrollableDebounced("down");
        } else {
          scrollDown();
        }
      }
    }
    else {
      const section = document.getElementById(`section-${currentSection}`);
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      if (sectionTop <= 0 && sectionBottom > window.innerHeight) {
        document.body.style.overflow = "auto";
      } else {
        if (sectionBottom <= window.innerHeight && e.deltaY > 0) {
          document.body.style.overflow = "hidden";
          scrollDown();
        }
        if (sectionTop >= 0 && e.deltaY < 0) {
          document.body.style.overflow = "hidden";
          scrollUp();
        }
      }
    }
  };

  const handleKeyPress = e => {
    if (!scrollables.includes(currentSection)) {
      document.body.style.overflow = "hidden";
      e.preventDefault();
      if (e.keyCode === 38) {
        if (splideScrollable.indexOf(currentSection) != -1) {
          handleScrollable("up");
        }
        else {
          scrollUp();
        }
      } else if (e.keyCode === 40) {
        if (splideScrollable.indexOf(currentSection) != -1) {
          handleScrollable("down");
        } else {
          scrollDown();
        }
      }
    }
    else {
      const section = document.getElementById(`section-${currentSection}`);
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      if (sectionTop <= 0 && sectionBottom > window.innerHeight) {
        document.body.style.overflow = "auto";
      } else {
        if (sectionBottom <= window.innerHeight && e.keyCode === 40) {
          document.body.style.overflow = "hidden";
          scrollDown();
        }
        if (sectionTop >= 0 && e.keyCode === 38) {
          document.body.style.overflow = "hidden";
          scrollUp();
        }
      }
    }
  };

  const handleWheelDebounced = _.debounce(handleWheel, cooldown);
  const handleScrollableDebounced = _.debounce(handleScrollable, cooldown);

  return (
    <SplideContext.Provider value={currentSplide}>
      <SectionContext.Provider value={{ setCurrentSection }}>
        <OnScrollContext.Provider value={{ onScroll, addToOnScroll }}>
          {props.children}
        </OnScrollContext.Provider>
      </SectionContext.Provider>
    </SplideContext.Provider>
  );
}
