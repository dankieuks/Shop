import { MdSend } from "react-icons/md";
import { iconSize } from "../../Components/Constants/Constants";
function Blog() {
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      imgPost:
        "https://pbs.twimg.com/media/FQtZPYyVgAAmC-D?format=jpg&name=large",

      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "Boost your conversion rate",
      href: "#",
      imgPost:
        "https://blogger.googleusercontent.com/img/a/AVvXsEi-zIa-B7YI2xLHl245XFwW44DmVw_owzVnxUX7kqhjb-yooEE1LWcCW-CVS_skiU8zqLWHuN0KqiCROu7SlBmHVqQPbKp1Abh4916fU6YljeLN39tnmy2pL5X9XNWt9DZ-hcN_tNTuasTOYqpNIRT2QIV7itn904TWYGQmciL6npk4ZLLW4TKqWWd00Q=s16000",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "Boost your conversion rate",
      href: "#",
      imgPost:
        "https://kenh14cdn.com/203336854389633024/2021/4/30/photo-1-1619714258718680040081-1619717654605670284344.jpg",

      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    // More posts...
  ];
  return (
    <section className=" bg-cyan-100 py-24 sm:py-20">
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="items-center mx-auto  max-w-2xl lg:mx-0 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 md:grid-cols-2 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none  lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex   flex-col items-start justify-between"
            >
              <img
                src={post.imgPost}
                alt=""
                className=" w-full h-[250px]  md:h-72 rounded-t-lg object-cover"
              />
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <iv className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </iv>
            </article>
          ))}
        </div>
      </nav>
      <nav className="grid h my-10 ">
        <h1 className="text-4xl text-center">Top Comment</h1>

        <form action=" " className=" w-full my-7">
          <div className="flex mx-[15%] items-center">
            <input
              type="text"
              placeholder="Nội dung bình luận "
              className="w-[85%] bg-slate-100 block mr-5  my-5 h-10 p-5 "
            />
            <button className=" border-primary bg-red-300  rounded font-semibold items-center   flex justify-center hover:bg-primary hover:text-white w-[90px] h-10 float-right  ">
              <MdSend size={iconSize} />
            </button>
          </div>
          <input type="file" className="float-left mb-1 mx-[15%]" />
        </form>
        <ul className="w-[70%] float-left mx-[15%]  my-5 ">
          <li className="block my-5">
            <div className="flex ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwttmJ8hKA9m__MNyYn7WghUocb2Gu9Uoow&usqp=CAU"
                alt=""
                width="40px"
                height="40px"
                className="rounded-[50%] object-cover"
              />
              <div className="ml-3">
                <h5 className="">hellssssssssssssssssssssssssssssssssssso</h5>
                <p> hello</p>
              </div>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwttmJ8hKA9m__MNyYn7WghUocb2Gu9Uoow&usqp=CAU"
              alt=""
              width="70px"
              height="70px"
              className=" ml-[10%]"
            />
          </li>
          <li className="block my-5">
            <div className="flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwttmJ8hKA9m__MNyYn7WghUocb2Gu9Uoow&usqp=CAU"
                alt=""
                width="40px"
                height="40px"
                className="rounded-[50%] object-cover"
              />
              <div className="ml-3">
                <h5 className="">Đàn </h5>
                <p> hello</p>
              </div>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwttmJ8hKA9m__MNyYn7WghUocb2Gu9Uoow&usqp=CAU"
              alt=""
              width="70px"
              height="70px"
              className=" ml-[10%] "
            />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Blog;
