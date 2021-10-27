const Gif = ({title, url, setSelectedGif}) => {

    const onClick = () => {
        setSelectedGif({
            title,
            url
        })
    }

    return (
        <div>
            <p>{title}</p>
            <img width="20" src={url} alt={title} />
            <button onClick={onClick}>Zoom</button>
        </div>
    )
}

export default Gif
