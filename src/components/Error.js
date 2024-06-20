import { useRouteError } from "react-router-dom"

const Error = () => {

    const error = useRouteError();
    console.log(error);
  return (
    <div>
        <h1>OOOpppss!!! Something went wrong :)</h1>
        <h3>{error.status} : {error.data}</h3>
    </div>
  )
}

export default Error