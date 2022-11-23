<?php

namespace App\Http\Controllers;

use App\Models\Name;
use Illuminate\Http\Request;

class NameController extends Controller
{
    function getName()
    {
        $name = Name::find(1);
        if (isset($name->id)) {
            return response()->json([
                "status" => 1,
                "message" => "Name Found",
                "data" => $name->name
            ]);
        } else {
            return response()->json([
                "status" => 0,
                "message" => "Name Not Found",
                "data" => "Name Not Found"
            ]);
        }
    }

    function setName(Request $request)
    {
        request()->validate([
            "name" => "required",
        ]);

        $name = Name::find(1);
        if (isset($name->id)) {
            $name->name = $request->name;
            $name->save();
        } else {
            $name = new Name();
            $name->name = $request->name;
            $name->save();
        }
        return response()->json([
            "status" => 1,
            "message" => "Name Updated",
            "data" => $name->name
        ]);
    }
}
