import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Card from '@/Components/Card.jsx';
import CardContent from '@/Components/CardContent.jsx'
import { Head, useForm, usePage, Link } from '@inertiajs/react';

export default function Index(props) {

    const { files, auth } = usePage().props

    const [editing, setEditing ] = useState(false)


    const { data, setData, reset, clearErrors, errors, post, progress } = useForm({
        title: "",
        file: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("file.upload.store"));
        setData("title", "")
        setData("file", null)
    }

    const submit = (e) => {
        console.log('submit');
    }

    console.log(files);

    return (
        <AuthenticatedLayout user={props.auth.user}>
            <Head title="Posts"/>

            <div className={"w-full mt-12 flex flex-col min-h-100"}>
                <section
                    className={`w-full mx-auto sm:px-6 lg:px-8`}>
                    <div className="py-5 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-6 pt-4 text-gray-900">
                            <h2 className={"text-lg font-bold my-2"}>Bienvenue {auth.username} </h2>
                            <p className={"text-lg my-2"}> Ceci est votre espace de gestion des fichiers locaux.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form name="createForm" onSubmit={handleSubmit}>
                                    <div className="flex flex-col">
                                        <div className="mb-4">
                                            <label className="text-md text-secondary">Titre du
                                                fichier</label>
                                            <input type="text"
                                                   className="my-3 py-2 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                                   name="title"
                                                   value={data.title}
                                                   placeholder={"Ecrivez ici le nom du fichier"}
                                                   onChange={(e) => setData("title", e.target.value)}
                                            />
                                            <span className="text-red-600">
                                    {errors.title}
                                </span>
                                        </div>
                                        <div className="mb-0">
                                            <label className="">Sauvegarde du fichier dans l'espace locale&nbsp;:</label>
                                            <input type="file" className="w-full py-2 cursor-pointer" name="file"
                                                   title={"Sauvegarder un fichier"}
                                                   onChange={(e) => setData("file", e.target.files[0])}
                                            />
                                            <span className="text-red-600">
                                    {errors.file}
                                </span>
                                        </div>
                                    </div>
                                    {progress && (
                                        <div className="w-full bg-gray-200 rounded-full">
                                            <div
                                                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                width={progress.percentage}> {progress.percentage}%
                                            </div>
                                        </div>
                                    )}
                                    <div className="mt-4">
                                        <button type="submit"
                                                className="px-6 py-2 font-bold text-white bg-green-500 rounded">
                                            Sauvegarder le fichier
                                        </button>
                                    </div>
                                </form>

                                <div className={"my-5 flex flex-col gap-2"}>
                                    <h2 className={"text-lg text-primary-dark"}> Liste des fichiers utilisant
                                        l'espace de stockage interne : </h2>
                                    <p className={"text-md text-secondary-700"}> Pour être alloués à des
                                        élèments (projets, membres ...), vous devez vous rendre dans la Galerie
                                        et activer le service local de stockage.</p>
                                </div>

                                <table className="max-sm:hidden table-fixed w-full">
                                    <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Image</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {files.map(({id, title, name, url}) => (
                                        <tr key={id}>
                                            <td className="border px-4 py-2">{id}</td>
                                            <td className="border px-4 py-2">{title}</td>
                                            <td className="border px-4 py-2">
                                                <img className="mx-auto aspect-square object-contain" src={url}
                                                     alt={title} width="100px"/>
                                            </td>
                                            <td className={"border px-4 py-2"}>
                                                <Link
                                                    className="px-2 py-3 rounded-lg bg-red-400 hover:bg-red-600 flex flex-col items-center justify-center"
                                                    href={route('file.destroy', id)}
                                                    method="delete">Supprimer</Link>
                                            </td>
                                        </tr>
                                    ))}
                                    {files.length === 0 && (
                                        <tr>
                                            <td className="px-6 py-4 border-t" colSpan="4">
                                                Aucun fichier n'a été trouvé
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                                <div className={"max-sm:flex wrap gap-2 hidden"}>
                                    {files.map(({id, title, name, url}, index) => {
                                        const actions = [
                                            {id:id, itemId:5, actionPath:"file.destroy", pathName: "enable", method:"delete", actionText:`Supprimer ${title}`, ui:"button"}
                                        ]

                                        return (
                                            <div key={id}>
                                            <Card
                                                addedcss={"max-w-"}
                                            actions={actions}
                                            created_at={"12-05-2004"}
                                            auth={props.auth}
                                            user_id={props.auth.user.id}>
                                                <CardContent submit={submit}
                                                             setData={setData}
                                                             setEditing={setEditing}
                                                             editing={editing}
                                                             reset={reset}
                                                               clearErrors={clearErrors}
                                                                >
                                                <>
                                                     <span className="text-gray-600 flex justify-between gap-2">
                                                    <span
                                                        className="cursor-pointer text-gray-600">Nom: {title}</span>
                                                    <span className="cursor-pointer text-green-700"
                                                          onClick={() => setEditing(title)}>Editer</span>
                                                    </span>
                                                </>
                                                </CardContent>
                                            </Card>
                                            </div>
                                        )
                                    })}
                                </div>
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
