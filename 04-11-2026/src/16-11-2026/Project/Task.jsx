import { useState } from "react";

export default function Task() {
	const [userType, setUserType] = useState("student");
	const [loggedIn, setLoggedIn] = useState(false);

	const dashboardContent = {
		admin: "Manage users, review reports, and configure the system.",
		teacher: "Manage your classes, assignments, and student progress.",
		student: "View your courses, assignments, and learning progress.",
	};

	return (
		<main>
			{loggedIn ? (
				<section>
					<h1>{userType[0].toUpperCase() + userType.slice(1)} Dashboard</h1>
					<p>{dashboardContent[userType]}</p>
					<button type="button" onClick={() => setLoggedIn(false)}>Log out</button>
				</section>
			) : (
				<form
					onSubmit={(event) => {
						event.preventDefault();
						setLoggedIn(true);
					}}
				>
					<h1>Log in</h1>
					<label>User type </label>
					<select
						id="user-type"
						value={userType}
						onChange={(event) => setUserType(event.target.value)}
					>
						<option value="student">Student</option>
						<option value="teacher">Teacher</option>
						<option value="admin">Admin</option>
					</select>
					<button type="submit">Log in</button>
				</form>
			)}
		</main>
	);
}
