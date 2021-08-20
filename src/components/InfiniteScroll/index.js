import { useEffect, useRef } from "react";

export default function InfiniteScroll({ fetchMore }) {
  const pageEndRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '10px',
      threshold: 1,
    }

    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
        observer.disconnect()
        fetchMore()
      }
    }, options)
    observer.observe(pageEndRef.current)
  
    return () => {
      observer.disconnect()
    }
  }, [fetchMore]);

  return (
    <div ref={pageEndRef} />
  )
}