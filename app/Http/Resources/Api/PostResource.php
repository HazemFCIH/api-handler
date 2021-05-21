<?php

namespace App\Http\Resources\Api;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
         'id' => $this->id,
         'title' => $this->title,
            'body' => $this->body,
            'created_at' => $this->created_at->format('Y-m-d h:i a'),
            'updated_at' => $this->updated_at->format('Y-m-d h:i a'),
        ];
    }
}
