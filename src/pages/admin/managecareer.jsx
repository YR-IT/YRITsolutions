import React, { useState, useEffect } from 'react';

const ManageCareer = () => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        date: '',
        hiring_role: '',
        job_type: '',
        job_number: '',
        location: ''
    });

    const fetchCareers = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://yrmainbackend.vercel.app/api/product/getcareers', {
            });
            const data = await response.json();
            setCareers(data);
        } catch (error) {
            console.error('Error fetching careers:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCareers();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddCareer = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://yrmainbackend.vercel.app/api/product/addcareer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                fetchCareers();
                setFormData({
                    date: '',
                    hiring_role: '',
                    job_type: '',
                    job_number: '',
                    location: ''
                });
            } else {
                console.error('Failed to add career');
            }
        } catch (error) {
            console.error('Error adding career:', error);
        }
    };

    const handleDeleteCareer = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`https://yrmainbackend.vercel.app/api/product/deletecareer/${id}`, {
                method: 'DELETE',
                headers: {
                    
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                fetchCareers();
            } else {
                console.error('Failed to delete career');
            }
        } catch (error) {
            console.error('Error deleting career:', error);
        }
    };

    return (
        <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold mb-4">Manage Careers</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Add New Career</h2>
                <form onSubmit={handleAddCareer} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="job_number"
                        value={formData.job_number}
                        onChange={handleInputChange}
                        placeholder="Job Number"
                        className="p-2 border rounded text-black"
                        required
                    />
                    <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        placeholder="Date"
                        className="p-2 border rounded text-black"
                        required
                    />
                    <input
                        type="text"
                        name="hiring_role"
                        value={formData.hiring_role}
                        onChange={handleInputChange}
                        placeholder="Hiring Role"
                        className="p-2 border rounded text-black"
                        required
                    />
                    <input
                        type="text"
                        name="job_type"
                        value={formData.job_type}
                        onChange={handleInputChange}
                        placeholder="Job Type"
                        className="p-2 border rounded text-black"
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Location"
                        className="p-2 border rounded text-black"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Add Career
                    </button>
                </form>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Existing Careers</h2>
                {loading ? (
                    <p>Loading careers...</p>
                ) : (
                    <ul className="flex flex-col gap-2">
                        {careers.map((career) => (
                            <li key={career._id} className="flex justify-between items-center p-2 border rounded">
                                <div>
                                    <p className="font-bold">{career.hiring_role}</p>
                                    <p>{career.job_type} - {career.location}</p>
                                </div>
                                <button
                                    onClick={() => handleDeleteCareer(career._id)}
                                    className="bg-red-500 text-white p-2 rounded"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ManageCareer;
