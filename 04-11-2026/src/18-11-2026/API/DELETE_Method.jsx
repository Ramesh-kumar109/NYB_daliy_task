function DELETE_Method() {
    const deleteData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
                method: "DELETE"
            })

            if (!response.ok) {
                throw new Error("Failed to delete the data")
            }

            alert("Data successfully deleted")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <h2>DELETE_Method</h2>
            <p>name:Ramesh</p>
            <p>Email:ramesh@123gmail.com</p>
            <button onClick={deleteData}>Delete ID</button>
        </div>
    )
}

export default DELETE_Method