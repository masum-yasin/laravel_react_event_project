@extends('backend.layouts.app')
@section('content')
    <div class="main-container">
		<div class="pd-ltr-20 xs-pd-20-10">
			<div class="min-height-200px">
				
				<!-- Default Basic Forms Start -->
                <a href="{{route('schedule.index')}}" class="btn btn-sm btn-success mb-3" style="float: right">ALL Sponsor List</a>
				<div class="pd-20 card-box mb-30">
					<div class="clearfix">
                        
						<div class="pull-left">
                           
							<h4 class="text-blue h4"> Event Schedule From</h4>
					</div>
					</div>
                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{$error}}</li>
                            @endforeach
                        </ul>
                    </div>
                        
                    @endif
                    @if (session('msg'))
                    <div class="alert alert-success">
                        {{session('msg')}}
                    </div>                        
                    @endif
					<form method="post" action="{{route('schedule.store')}}" enctype="multipart/form-data">
                        @csrf
                         {{-- Category Section --}}
                         <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">Event Category</label>
                            <div class="col-sm-12 col-md-10">
                                <select name="category" id="" class="form control">
                                    
                                    @foreach ($categorys as $item)
                                        <option value="{{$item->id}}">{{$item->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
						<div class="form-group row">
						<label class="col-sm-12 col-md-2 col-form-label">Day Number</label>
							<div class="col-sm-12 col-md-10">
								<input class="form-control" type="text" placeholder="Enter Event Continue Number" name="day" value="{{old('day')}}">
							</div>
						</div>
                        <div class="form-group row">
                            <label class="col-sm-12 col-md-2 col-form-label">Start Time</label>
                                <div class="col-sm-12 col-md-10">
                                    <input class="form-control" type="datetime-local" placeholder="Event Start Time" name="starttime" value="{{old('starttime')}}">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-12 col-md-2 col-form-label">Ending Time</label>
                                    <div class="col-sm-12 col-md-10">
                                        <input class="form-control" type="datetime-local" placeholder="Event Ending Time" name="endtime">
                                    </div>
                                </div>
                           
                           <div class="row mb-3">
							<label class="col-sm-12 col-md-2 col-form-label">Title</label>
							<div class="col-sm-12 col-md-10">
								<textarea name="desc" id="" cols="90" rows="5" class="form-control">{{old('desc')}}</textarea>
							</div>
						</div>
                        <div class="row mb-3 w-50">
							<label class="col-sm-12 col-md-2 col-form-label"></label>
							<div class="col-sm-12 col-md-10">
								<button type="submit" class="form-control" style="margin-left:90px">Submit</button>
							</div>
						</div>
					</form>
					
					</div>
				</div>
		

			</div>
		
		</div>

@endsection