<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;





class Sponsor extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_name','logo','description','company_location','category_id'
    ];
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    public function product(): HasMany
    {
        return $this->hasMany(EventVenues::class);
    }
}
