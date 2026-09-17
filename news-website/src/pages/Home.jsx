import NewsList from "../components/NewsList"

function Home(){
    return(
        <main className="min-h-screen px-6 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">
                Latest News
            </h2>
          
          <NewsList/>
        </main>
    )
}

export default Home