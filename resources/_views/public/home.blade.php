@extends('layouts.public')

@section('content')

    <main id="homepage">
        <livewire:sections.intro-section />
        <livewire:sections.mission-section />
        <livewire:sections.projects-section />
        <livewire:sections.members-section />
        <livewire:sections.contact-section />
    </main>
@endsection
