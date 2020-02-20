
class BaseClass {
    constructor() {
        this.api_key = "e0934a1a9e38dbb496b6e3f09f6a5eb2";
    }
}

export class CompanySearchParams extends BaseClass {
    constructor(query,page) {
        super();
        this.query = query;
        this.page = page;
    }
}

export class CollectionSearchParams extends BaseClass {
    constructor(query,page) {
        super();
        this.language = "zh-CN";
        this.query = query;
        this.page = page;
    }
}

export class KeywordSearchParams extends BaseClass {
    constructor(query,page) {
        super();
        this.query = query;
        this.page = page;
    }
}

export class MovieSearchParams extends BaseClass{// serch by exact movie name
    constructor(query,page) {
        super();
        this.query = query;
        this.page = page;
        this.language = "zh-CN";
        this.include_adult = false;
        this.region = null;
        this.year = null;
        this.primary_release_year = null;
    }
}

export class MultiSearchParams extends BaseClass {
    constructor(query,page) {
        super();
        this.language = "zh-CN";
        this.query = query;
        this.page = page;
        this.include_adult = null;
        this.region = null;
    }
}

export class PeopleSearchParams extends BaseClass {
    constructor(query,page) {
        super();
        this.language = "zh-CN";
        this.query = query;
        this.page = page;
        this.include_adult = null;
        this.region = null;
    }
}

export class TvSearchParams extends BaseClass {
    constructor(query,page) {
        super();
        this.language = "zh-CN";
        this.query = query;
        this.page = page;
        this.first_air_date_year = null;
    }
}

export class NowPlayingParams extends BaseClass {
    constructor() {
        super();
        this.language = "zh-CN";
        this.page = 1;
        this.region = "CN";
    }
}

export class UpComingParams extends BaseClass {
    constructor() {
        super();
        this.language = "zh-CN";
        this.page = 1;
        this.region = "CN";
    }
}
