import Gif from "./Gif"

const GifList = ({datas, setSelectedGif}) => {

    if (!datas) {
        return <p className="center">Loading...</p>
    }

    return (
        <div>
            { datas.map(gif => {
                return (
                    <Gif
                        key={gif.id}
                        title={gif.title}
                        url={gif.images.original.url}
                        setSelectedGif={setSelectedGif}
                    />
            )}) }
        </div>
    )
}

export default GifList
