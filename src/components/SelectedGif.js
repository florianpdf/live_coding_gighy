
const SelectedGif = ({data}) => {

    if (!data) {
        return <p>No selected gif</p>
    }

    return (
        <div>
            <p>{data.title}</p>
            <img src={data.url} alt={data.title}/>
        </div>
    )
}

export default SelectedGif
