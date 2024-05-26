import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/react';

export default function Index(props) {

    const { files } = usePage().props
    console.log('files ', files);
    const { data, setData, errors, post, progress } = useForm({
        title: "",
        file: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("file.upload.store"));
        setData("title", "")
        setData("file", null)
    }

    return (
        <AuthenticatedLayout user={props.auth.user}>
            <Head title="Posts" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Title</label>
                                        <input type="text" className="w-full px-4 py-2" label="Title" name="title"
                                            value={data.title}
                                            onChange={(e) => setData("title", e.target.value)}
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">File</label>
                                        <input type="file" className="w-full px-4 py-2" label="File" name="file"
                                            onChange={(e) => setData("file", e.target.files[0])}
                                        />
                                        <span className="text-red-600">
                                            {errors.file}
                                        </span>
                                    </div>
                                </div>
                                {progress && (
                                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" width={progress.percentage}> {progress.percentage}%</div>
                                    </div>
                                )}
                                <div className="mt-4">
                                    <button type="submit" className="px-6 py-2 font-bold text-white bg-green-500 rounded">
                                        Sauvegarder le media
                                    </button>
                                </div>
                            </form>

                            <h1>Uploaded File List:</h1>
                            <table className="table-fixed w-full">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 w-20">Id</th>
                                    <th className="px-4 py-2">Titre</th>
                                    <th className="px-4 py-2">Image</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {files.map(({ id, title, name, url }) => (
                                    <tr>
                                        <td className="border px-4 py-2">{ id }</td>
                                        <td className="border px-4 py-2">{ title }</td>
                                        <td className="border px-4 py-2">
                                            <img src={url} alt={title} width="200px" />
                                        </td>
                                        <td>
                                            <div className={`text-teal-900 hover:text-red-600`}>
                                            <Link as="button" href={route('file.destroy', id)}
                                                  method="delete">Supprimer</Link>
                                            </div>
                                            <div className={`text-teal-900 hover:text-blue-600`}>
                                            <Link as="button" href={route('file.download', id)}
                                                  method="get">Télécharger</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {files.length === 0 && (
                                    <tr>
                                        <td className="px-6 py-4 border-t" colSpan="4">
                                        No contacts found.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
