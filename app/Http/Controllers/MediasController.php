<?php

namespace App\Http\Controllers;

use App\Models\Medias;
use App\Models\Members;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MediasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Gallery/Index', [
            'medias' => Medias::all(),
            'members' => Members::all(),
            'authors' => Members::with('user:id,name')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Medias $medias)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Medias $medias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Medias $medias)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Medias $medias)
    {
        //
    }
}
