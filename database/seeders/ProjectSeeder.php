<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Projects;
use App\Models\User;
use Illuminate\Support\Facades\File;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get or create a default user for the projects
        $user = User::first();
        if (!$user) {
            $user = User::factory()->create([
                'name' => 'Admin',
                'email' => 'admin@els-togo.org',
            ]);
        }

        // Read the JSON file
        $jsonPath = resource_path('theme/data/project.json');
        
        if (!File::exists($jsonPath)) {
            $this->command->error("Project JSON file not found at: {$jsonPath}");
            return;
        }

        $projects = json_decode(File::get($jsonPath), true);

        if (!$projects) {
            $this->command->error("Failed to parse project JSON file");
            return;
        }

        // Import each project
        foreach ($projects as $projectData) {
            $project = Projects::create([
                'user_id' => $user->id,
                'project_date' => $projectData['date'] ?? null,
                'project_place' => $projectData['place'] ?? null,
                'project_category' => $projectData['category'] ?? null,
                'project_title' => $projectData['title'],
                'project_extract' => $projectData['accroche'] ?? null,
                'project_teaser' => $projectData['accroche'] ?? null,
                'project_description' => $projectData['description'] ?? null,
                'project_goal' => $projectData['goal'] ?? null,
                'project_method' => $projectData['how-we-do'] ?? null,
                'project_results' => $projectData['results'] ?? null,
                'project_publish_status' => 'published',
                'project_infos' => [
                    'original_id' => $projectData['id'],
                    'image_path' => $projectData['project-img'] ?? null,
                ],
            ]);

            $this->command->info("Imported project: {$project->project_title}");
        }

        $this->command->info("Successfully imported " . count($projects) . " projects");
    }
}
