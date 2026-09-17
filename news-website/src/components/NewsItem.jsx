function NewsItem() {
    return (
        <article className ="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
           alt="News"
           className="w-full h-48 object-cover" />

           <div className="p-5">
            <h3 className="text-xl font-bold mb-2">
                Latest News Article
            </h3>
            <p className="text-gray-600 mb-3">
                this is a short summary of the news article.
            </p>
            <p className="text-sm text-gray-500">
                Published: 17 September 2026
            </p>
           </div>
        </article>
    )
}


export default NewsItem