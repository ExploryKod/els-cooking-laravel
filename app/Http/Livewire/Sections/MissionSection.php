<?php

namespace App\Livewire\Sections;

use Livewire\Component;

class MissionSection extends Component
{
    public function render()
    {
        return view('livewire.sections.mission-section')->with('layout', 'public');
    }
}
