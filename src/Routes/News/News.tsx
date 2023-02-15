import { useEffect } from "react";
import { endLoading } from "../../Redux/features/settings/settingsSlice";
import { useAppDispatch } from "../../Redux/hooks";
import "./News.scss";
const News = () => {
  interface newsType {
    title: string;
    description: string;
    img?: string;
  }
  const news: Array<newsType> = [
    {
      title: "Bitcoin's waiting rising",
      description:
        "Ilon Mask said about rising Bitcoin up to 35.000$.This Information affected on Financial Market all over the world.Traders were suprised for it",
      img: "https://cdn.wccftech.com/wp-content/uploads/2021/06/elon-musk-2.jpg",
    },
    {
      title: "Bitcoin's waiting rising",
      description:
        "Ilon Mask said about rising Bitcoin up to 35.000$.This Information affected on Financial Market all over the world.Traders were suprised for it",
      img: "https://cdn.vietnambiz.vn/171464876016439296/2022/3/15/elon-likes-bitcoin-1612790702265202575597-16473321316281132595167.jpg",
    },
    {
      title: "Bitcoin's waiting rising",
      description:
        "Ilon Mask said about rising Bitcoin up to 35.000$.This Information affected on Financial Market all over the world.Traders were suprised for it",
      img: "https://cdn.wccftech.com/wp-content/uploads/2021/06/elon-musk-2.jpg",
    },
    {
      title: "Bitcoin's waiting rising",
      description:
        "Ilon Mask said about rising Bitcoin up to 35.000$.This Information affected on Financial Market all over the world.Traders were suprised for it",
      img: "https://cdn.vietnambiz.vn/171464876016439296/2022/3/15/elon-likes-bitcoin-1612790702265202575597-16473321316281132595167.jpg",
    },
  ];
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(endLoading())
      
  //   }, [])
  return (
    <div className="news-container global-container">
      <h1 className="page-heading news">News</h1>
      <div className="news-items-container">
        {news.map((e, i) => {
          return (
            <div key={i} className="news-item">
              <span className="img-span">
                <img src={e.img} alt="" />
              </span>
              <div className="news-item-right">
                <h2>{e.title}</h2>
                <p>{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
