import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return `
            
    <div class="col-6 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
        <div class="row">
            <div class="col-11 search-block">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control rounded-pill search" placeholder="Search Tuiter" />
            </div>
            <div class="col-1 d-flex align-items-center">
                <a href="explore-settings.html" class="text-decoration-none fas fa-cog fa settings"></a>
            </div>
        </div>
        <div class="row mt-2">
            <ul class="nav nav-tabs tabs justify-content-around">
                <li class="nav-item">
                    <a class="nav-link active blue-border" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>

            <ul class="list-group mt-1">
            
            <li class="list-group-item m-0 p-0">
                <div class="row">
                    <img
                        src="https://www.travelandleisure.com/thmb/LMxP8Mh5im3R7TmB1gtVZUr6bZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spaceship-neptune-capsule-exterior-SPACELOUNGE0422-fcc279863ded489b9475d97b1e015f9c.jpg">
                    <h3 class="text-white position-absolute bottom-0">Starships taking off</h3>
                </div>
            </li>
            ${PostSummaryList()}
            </ul>
        </div>
    </div>
    `;
};
export default ExploreComponent;
