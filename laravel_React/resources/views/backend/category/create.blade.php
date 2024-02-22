@extends('backend.layouts.app')
@section('content')
    <div class="main-container">
		<div class="pd-ltr-20 xs-pd-20-10">
			<div class="min-height-200px">
				
				<!-- Default Basic Forms Start -->
				<div class="pd-20 card-box mb-30">
					@if (session('msg'))
					<div class="alert alert-danger">
						{{session('msg')}};
					</div>
						
					@endif
					<a href="{{route('category.index')}}" class="btn btn-sm btn-info mb-3" style="float: right">ALL Category Product</a>
					<div class="clearfix">
						<div class="pull-left">
							<h4 class="text-blue h4">Default Basic Forms</h4>
					</div>
					</div>
					<form method="post" action="{{route('category.store')}}">
						@csrf
						<div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Event Category</label>
							<div class="col-sm-12 col-md-10">
								<input class="form-control" type="text" placeholder="Enter Your Category" name="name">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label"></label>
							<div class="col-sm-12 col-md-10">
								<button type="submit" class="form-control">Submit</button>
							</div>
						</div>
						
						
						<div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Color</label>
							<div class="col-sm-12 col-md-10">
								<input class="form-control" value="#563d7c" type="color">
							</div>
						</div>
						<div class="form-group row">
							<label class="col-sm-12 col-md-2 col-form-label">Input Range</label>
							<div class="col-sm-12 col-md-10">
								<input class="form-control" value="50" type="range">
							</div>
						</div>
						
					</form>
					
					</div>
				</div>
		

			</div>
		
		</div>

@endsection