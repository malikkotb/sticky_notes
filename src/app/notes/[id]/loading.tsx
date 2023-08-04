// exports a component with a loading indicator that will be rendered in palce of the page
// when the data is being fetched
// -> results in faster load times bc. the content can be streamed directly into that component
// instead of waiting for the entire page to load

export default function Loading() {
    return <p>Loading...</p>
}