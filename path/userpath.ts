import { useEffect, useState } from "react";


interface Post {
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  links: { url: string; text: string }[];
  newlinks:  { url: string; text: string }[];
}

export const userpath = () => {

    const [data, setData] = useState<Array<Post>>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async () => {
        const response = await fetch("http://192.168.23.60:3001/");
        const data: Array<Post> = await response.json();
        console.log(data)

        setData(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return { data, isLoading };
}
