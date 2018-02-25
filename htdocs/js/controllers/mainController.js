app.controller('mainController', ['$scope', function($scope) {
    $scope.apps = [
    {
        icon: 'img/me.jpg',
        title: 'About Me',
        link: '/#/About'
    },
    {
        icon: 'img/top7.gif',
        title: 'Top Sevens',
        link: '/#/TopSevens'
    },
    {
        icon: 'img/redElemental.jpg',
        title: 'The Red Mage',
        link: '/#/Red'
    }
    ];
    
    $scope.interests = [
    {
        icon: 'img/math.jpg',
        title: 'Mathematics',
        link: '/#/About/Math',
    },
    {
        icon: 'img/code.jpg',
        title: 'Programming',
        link: '/#/About/Programming',
    },
    {
        icon: 'img/poker.png',
        title: 'Poker',
        link: '/#/About/Poker'
    },
    {
        icon: 'img/running.jpg',
        title: 'Running',
        link: '/#/About/Running'
    }
    ]

    $scope.topSevens = [
    {
        title: 'Movies',
        icon: 'img/starWars.jpeg',        
        link: '/#/TopSevens/Movies',
    },
    {
        title: 'TV Shows',
        icon: 'img/dexter.jpg',        
        link: '#/TopSevens/TVShows',
    },  
    {
        title: 'Video Games',
        icon: 'img/zelda.png',
        link: '/#/TopSevens/VideoGames'
    },
    {
        title: 'Music',
        icon: 'img/ironMaiden.jpg',
        link: '/#/TopSevens/Music',
    },
    {        
        title: 'Books',
        icon: 'img/theHobbit.jpg',
        link: '/#/TopSevens/Books',
    }
    ];
    
    $scope.movies = [
        {
            title: 'The Godfather',
            likes: 7,
            dislikes: 0,
            year: 1972,
            icon: 'img/theGodfather.jpg',
        },
        {
            title: 'Star Wars',
            likes: 6,
            dislikes: 0,
            year: 1977,
            icon: 'img/starWars.jpeg',   
        },
        {
            title: 'Pulp Fiction',
            likes: 5,
            dislikes: 0,
            year: 1994,
            icon: 'img/pulpFiction.jpg',
        },
        {
            title: 'Beetlejuice',
            likes: 4,
            dislikes: 0,
            year: 1988,
            icon: 'img/beetlejuice.jpg',
        },
        {
            title: 'Mean Girls',
            likes: 3,
            dislikes: 0,
            year: 2004,
            icon: 'img/meanGirls.jpg',
        },
        {
            title: 'Tropic Thunder',
            likes: 2,
            dislikes: 0,
            year: 2008,
            icon: 'img/tropicThunder.jpg',
        },
        {
            title: 'Mulan',
            likes: 1,
            dislikes: 0,
            year: 1998,
            icon: 'img/mulan.jpg',
        }
        
    ];
    
    $scope.tvShows = [
        {
            title: 'Dexter',
            likes: 7,
            dislikes: 0,
            year: 2006,
            icon: 'img/dexter.jpg'
        },
        {
            title: 'Always Sunny in Philadelphia',
            likes: 6,
            dislikes: 0,
            year: 2005,
            icon: 'img/iasip.jpg',
        },
        {
            title: 'Scrubs',
            likes: 5,
            dislikes: 0,
            year: 2001,
            icon: 'img/scrubs.jpg',
        },
        {
            title: 'How I Met Your Mother',
            likes: 4,
            dislikes: 0,
            year: 2005,
            icon: 'img/himym.png',
        },
        {
            title: 'Arrested Development',
            likes: 3,
            dislikes: 0,
            year: 2003,
            icon: 'img/arrestedDevelopment.jpg',
        },
        {
            title: 'Game of Thrones',
            likes: 2,
            dislikes: 0,
            year: 2011,
            icon: 'img/gameOfThrones.jpg',
        },
        {
            title: 'Rick and Morty',
            likes: 1,
            dislikes: 0,
            year: 2013,
            icon: 'img/rickAndMorty.png'
        },
    ];
    
    $scope.music = [
        {
            title: 'Smooth Criminal',
        },
        {
            title: 'Four Seasons',
        },
        {
            title: 'Ecstacy of Gold',
        },
        {
            title: 'Paint it Black',
        },
        {
            title: 'Heaven and Hell',
        },
        {
            title: 'Gin and Juice',
        },
        {
            title: 'The Number of the Beast',   
        },
    ];
    
    $scope.books = [
        {
            title: 'The Hobbit',
        },
    ];
    
    $scope.videoGames = [
        {
            title: 'Chrono Trigger',
            likes: 7,
            dislikes: 0,
            year: 1995,
            icon: 'img/chronoTrigger.png',
        },
        {
            title: 'Final Fantasy VII',
            likes: 6,
            dislikes: 0,
            year: 1997,
            icon: 'img/finalFantasyVII.png',

        },
        {
            title: 'Legend of Zelda: A Link to the Past',
            likes: 5,
            dislikes: 0,
            year: 1991,
            icon: 'img/zelda.png',

        },
        {
            title: 'Final Fantasy VI',
            likes: 4,
            dislikes: 0,
            year: 1994,
            icon: 'img/finalFantasyVI.jpg',

        },
        {
            title: 'Castlevania: Symphony of the Night',
            likes: 3,
            dislikes: 0,
            year: 1997,
            icon: 'img/castlevania.jpg',

        },
        {
            title: 'Super Mario World',
            likes: 2,
            dislikes: 0,
            year: 1991,
            icon: 'img/mario.jpg',

        },
        {
            title: 'Portal',
            likes: 1,
            dislikes: 0,
            year: 2007,
            icon: 'img/portal.jpg',

        },

    ];
    $scope.$back = function(){
        window.history.back();
    };
}]);