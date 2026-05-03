import React from "react";

interface Blog {
  id: number;
  title: string;
  url: string;
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title:
      "How to Integrate AI Into Your Web App Using React (With a Free API)",
    url: "https://medium.com/@pakshgupta007/how-to-integrate-ai-into-your-web-app-using-react-with-a-free-api-302e2d4c4b77",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*yp3IxJZGtB6C9Qyh3RQVhQ.png",
  },
  {
    id: 2,
    title:
      "Why Mark Zuckerberg Is Building the ‘Avengers’ of AI — And What It Means for Us",
    url: "https://medium.com/@pakshgupta007/why-mark-zuckerberg-is-building-the-avengers-of-ai-and-what-it-means-for-us-e8f17227a693",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hvTKbG1CvaWUMAzBBluJZQ.png",
  },
];

const BlogGrid: React.FC = () => {
  const extendedBlogs = [...blogs, ...blogs]; // repeat for seamless scroll
  // Split blogs into 3 columns
  const column1 = extendedBlogs.filter((_, idx) => idx % 3 === 0);
  const column2 = extendedBlogs.filter((_, idx) => idx % 3 === 1);
  const column3 = extendedBlogs.filter((_, idx) => idx % 3 === 2);

  const BlogCard = ({ blog }: { blog: Blog }) => (
    <a
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg shadow-lg overflow-hidden cursor-pointer  transform transition-transform duration-300 hover:scale-105 mb-6"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{blog.title}</h3>
      </div>
    </a>
  );

  return (
    <section
      id="blogs"
      className="py-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden"
    >
      <div className="relative overflow-hidden  h-[700px] w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Latest{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Blogs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore insightful blogs crafted with cutting-edge technologies and
            creative problem-solving approaches.
          </p>
        </div>

        <div className="relative h-[700px] overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Column 1 - Scrolls down */}
            <div className="overflow-hidden">
              <div className="animate-scroll-down">
                {column1.map((blog, idx) => (
                  <BlogCard key={`col1-${blog.id}-${idx}`} blog={blog} />
                ))}
              </div>
            </div>

            {/* Column 2 - Scrolls up */}
            <div className="overflow-hidden">
              <div className="animate-scroll-up">
                {column2.map((blog, idx) => (
                  <BlogCard key={`col2-${blog.id}-${idx}`} blog={blog} />
                ))}
              </div>
            </div>

            {/* Column 3 - Scrolls down */}
            <div className="overflow-hidden">
              <div className="animate-scroll-down-slow">
                {column3.map((blog, idx) => (
                  <BlogCard key={`col3-${blog.id}-${idx}`} blog={blog} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 25s linear infinite;
        }

        .animate-scroll-down-slow {
          animation: scroll-down 35s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-down:hover,
        .animate-scroll-up:hover,
        .animate-scroll-down-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default BlogGrid;
