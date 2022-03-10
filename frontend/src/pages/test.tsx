import React from 'react';

export default function Test() {
    return (
        <div>
            <form
                // post to /api/students/add
                method="POST"
                action="/api/student/add"
            >
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="email" placeholder="email" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
