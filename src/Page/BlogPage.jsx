import { FiSearch } from "react-icons/fi";
import { FaTag } from "react-icons/fa";

const BlogPage = () => {
  const blogs = [
    {
      image: "/blogs/blog1.jpg",
      title: "Why Digital Marketing 2026 is Important for Businesses",
      desc: "Digital marketing is essential for businesses in today’s online world. Learn how strategies help companies reach customers.",
      category: "Digital Marketing",
      date: "3/6/2026",
    },
    {
      image: "/blogs/blog2.jpg",
      title: "Top AI Careers 2026 That Offer Great Opportunities",
      desc: "Artificial Intelligence is creating new career opportunities in the tech industry.",
      category: "AI and Tech",
      date: "3/5/2026",
    },
    {
      image: "/blogs/blog3.jpg",
      title: "Why Study AI in 2026",
      desc: "Artificial Intelligence is becoming a core IT skill in 2026.",
      category: "AI and Tech",
      date: "3/3/2026",
    },
    {
      image: "/blogs/blog4.jpg",
      title: "How Practical AI Training Improves Placement Chances",
      desc: "Practical AI training helps students gain real experience and improve interview confidence.",
      category: "AI and Tech",
      date: "3/2/2026",
    },
    {
      image: "/blogs/blog1.jpg",
      title: "Why Digital Marketing 2026 is Important for Businesses",
      desc: "Digital marketing is essential for businesses in today’s online world. Learn how strategies help companies reach customers.",
      category: "Digital Marketing",
      date: "3/6/2026",
    },
    {
      image: "/blogs/blog2.jpg",
      title: "Top AI Careers 2026 That Offer Great Opportunities",
      desc: "Artificial Intelligence is creating new career opportunities in the tech industry.",
      category: "AI and Tech",
      date: "3/5/2026",
    },
    {
      image: "/blogs/blog3.jpg",
      title: "Why Study AI in 2026",
      desc: "Artificial Intelligence is becoming a core IT skill in 2026.",
      category: "AI and Tech",
      date: "3/3/2026",
    },
    {
      image: "/blogs/blog4.jpg",
      title: "How Practical AI Training Improves Placement Chances",
      desc: "Practical AI training helps students gain real experience and improve interview confidence.",
      category: "AI and Tech",
      date: "3/2/2026",
    },
    {
      image: "/blogs/blog1.jpg",
      title: "Why Digital Marketing 2026 is Important for Businesses",
      desc: "Digital marketing is essential for businesses in today’s online world. Learn how strategies help companies reach customers.",
      category: "Digital Marketing",
      date: "3/6/2026",
    },
    {
      image: "/blogs/blog2.jpg",
      title: "Top AI Careers 2026 That Offer Great Opportunities",
      desc: "Artificial Intelligence is creating new career opportunities in the tech industry.",
      category: "AI and Tech",
      date: "3/5/2026",
    },
    {
      image: "/blogs/blog3.jpg",
      title: "Why Study AI in 2026",
      desc: "Artificial Intelligence is becoming a core IT skill in 2026.",
      category: "AI and Tech",
      date: "3/3/2026",
    },
    {
      image: "/blogs/blog4.jpg",
      title: "How Practical AI Training Improves Placement Chances",
      desc: "Practical AI training helps students gain real experience and improve interview confidence.",
      category: "AI and Tech",
      date: "3/2/2026",
    },
  ];
  return (
    <>
      <section className="py-14 bg-white ">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-semibold text-[#0F2A44]">Blogs</h1>

            <p className="text-gray-600 mt-2 max-w-xl">
              Practical articles on web development, AI, design and career
              advice — written for students and early-career professionals.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-[320px]">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-green-600"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="border relative cursor-pointer border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                {/* Image */}
                <img
                  src={blog.image}
                  alt="blog"
                  className="h-48 w-full object-cover border border-gray-300"
                />

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-[#0F2A44] mb-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>

                  <div className="flex items-center absolute bottom-2 justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaTag className="text-green-600" />
                      {blog.category}
                    </span>

                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
