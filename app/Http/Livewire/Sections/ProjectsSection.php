<?php

namespace App\Livewire\Sections;

use Livewire\Component;

class ProjectsSection extends Component
{
    public function render()
    {
        return view('livewire.sections.projects-section')->with('layout', 'public');
    }
}
