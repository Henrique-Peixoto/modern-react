// Use "npm run json-server", to set a json server

import BlogList from './blogList'
import useFetch from './useFetch'
 
const Home = () => {
  // "data: blogs" means, grab the data, but call it "blogs" in this context
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  // When we change quickly between Home and New Blogs, the Home component
  // is unmouted, but React try to update it's state, which leads to an error, 
  // we gonna fix this on the next lesson.

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {/*If blogs evaluate to false, nothing is outputed on the screen, because the right
      side of && operator is not evaluated.
      If blogs evaluate to true, then the right side of the && operator is evaluated and
      then the BlogList is rendered on the screen.*/}
      { blogs && <BlogList blogs={blogs} title="All blogs" /> }
    </div>
  );
}
 
export default Home;