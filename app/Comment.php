<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public $primaryKey='id';
    protected $fillable = [
        'parent_id',
        'comment',
        'post_id',
        'user_id'
    ];
    protected $with = ['replies'];


    public function post()
    {
    	return $this->belongsTo(Post::class);
    }
    public function user()
    {
    	return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Comment::class, 'parent_id');
    }
}