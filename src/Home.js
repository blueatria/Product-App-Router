
const Home = ({user}) => {

    const contentStyle = {
        backgroundColor: 'white',
        color: '#800000',
        padding: 10,
        margin: 20,
        fontSize: 16
    }

    return (
        user === null
        ? <div style={contentStyle}>
            <strong> Welcome to Product App! You have not logged in </strong>
        </div>
        : <div style={contentStyle}>
            <strong> Happy to see you, <em> {user} </em>! </strong>
        </div>
    )
}

export default Home

