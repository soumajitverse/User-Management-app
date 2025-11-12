import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PostIndex = () => {
    
const [posts, setposts] = useState([])

useEffect()

  return (
    <>
       <div className="p-3">
        <h1 className="text-2xl font-bold mb-4">CRUD App</h1>
        <Link
          to="/create"
          className="mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Create
        </Link>
        <div className="overflow-x-auto mt-4">
          <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by title or body"
            //   value={search}
            //   onChange={handleSearchChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-50 text-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                //   onClick={() => handleSort("id")}
                >
                    ID
                  {/* ID {sortBy === "id" && (order === "asc" ? "↑" : "↓")} */}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                //   onClick={() => handleSort("title")}
                >
                  Title 
                  {/* {sortBy === "title" && (order === "asc" ? "↑" : "↓")} */}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 cursor-pointer"
                //   onClick={() => handleSort("body")}
                >
                  Body 
                  {/* {sortBy === "body" && (order === "asc" ? "↑" : "↓")} */}
                </th>
                <th scope="col" className="px-6 py-3 w-70">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                  key='1'
                  className="odd:bg-white even:bg-gray-50 border-b border-gray-200"
                >
                  <td className="px-6 py-2 font-medium text-gray-900">
                    1
                  </td>
                  <td className="px-6 py-2 text-gray-700">Hello</td>
                  <td className="px-6 py-2 text-gray-700">dd</td>
                  <td className="px-6 py-2 space-x-1">
                    <Link
                      to={`/edit`}
                      className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/show}`}
                      className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
                    >
                      Show
                    </Link>
                    <button
                    //   onClick={() => deletePost(post.id)}
                      className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>

              {/* {posts.map((post) => (
                <tr
                  key={post.id}
                  className="odd:bg-white even:bg-gray-50 border-b border-gray-200"
                >
                  <td className="px-6 py-2 font-medium text-gray-900">
                    {post.id}
                  </td>
                  <td className="px-6 py-2 text-gray-700">{post.title}</td>
                  <td className="px-6 py-2 text-gray-700">{post.body}</td>
                  <td className="px-6 py-2 space-x-1">
                    <Link
                      to={`/edit/${post.id}`}
                      className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/show/${post.id}`}
                      className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
                    >
                      Show
                    </Link>
                    <button
                      onClick={() => deletePost(post.id)}
                      className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}

export default PostIndex