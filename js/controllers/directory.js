var myApp = angular.module('directory', []);

myApp.controller('DirectoryController', ['$scope', function ($scope) {
    $scope.persons = [
        {
            name: 'Abby Fabian',
            title: 'Outside Sales',
            ext: '230',
            email: 'abby',
            picture: '',
            id: 'a'
        },
        {
            name: 'Amy McAllister',
            title: 'Accounts Payable',
            ext: '212',
            email: 'amy',
            picture: ''
        },
        {
            name: 'Brady Peterson',
            title: 'Outside Sales',
            ext: '302',
            email: 'brady',
            picture: '',
            id: 'b'
        },
        {
            name: 'Brian Hyland',
            title: 'Longview Store Manager',
            ext: '301',
            email: 'brian',
            picture: ''
        },
        {
            name: 'Craig Johnson',
            title: 'President',
            ext: '207',
            email: 'cj',
            picture: '',
            id: 'c'
        },
        {
            name: 'Dan Lagana',
            title: 'Outside Sales',
            ext: 'n/a',
            email: 'dan',
            picture: '',
            id: 'd'
        },
        {
            name: 'Dave Roos',
            title: 'Inside Sales',
            ext: '219',
            email: 'rooster',
            picture: ''
        },
        {
            name: 'David Ives',
            title: 'Warehouse',
            ext: 'n/a',
            email: 'david',
            picture: ''
        },
        {
            name: 'Debbie Freeman',
            title: 'Purchasing',
            ext: '210',
            email: 'debbie',
            picture: ''
        },
        {
            name: 'Denise Albert',
            title: 'Office Manager',
            ext: '206',
            email: 'denise',
            picture: ''
        },
        {
            name: 'Eddy Waddell',
            title: 'Counter Sales',
            ext: '304',
            email: 'eddy',
            picture: '',
            id: 'e'
        },
        {
            name: 'Gary Baker',
            title: 'Shop',
            ext: 'n/a',
            email: 'gary',
            picture: '',
            id: 'g'
        },
        {
            name: 'Halley Kramer',
            title: 'Accounting',
            ext: '208',
            email: 'halley',
            picture: '',
            id: 'h'
        },
        {
            name: 'Jason St. Hilaire',
            title: 'IT Guy',
            ext: '224',
            email: 'jasonst',
            picture: '',
            id: 'j'
        },
        {
            name: 'Jonathan White',
            title: 'Sales Manager',
            ext: '205',
            email: 'jonathan',
            picture: ''
        },
        {
            name: 'Julie Amell',
            title: 'Receptionist',
            ext: '200',
            email: 'julie',
            picture: ''
        },
        {
            name: 'Ken Lively',
            title: 'Counter Sales',
            ext: 'n/a',
            email: 'ken',
            picture: '',
            id: 'k'
        },
        {
            name: 'Kevin Hayes',
            title: 'Counter Sales',
            ext: '222',
            email: 'kevin.hayes',
            picture: ''
        },
        {
            name: 'Kris Johnson',
            title: 'Outside Sales',
            ext: '223',
            email: 'kris',
            picture: ''
        },
        {
            name: 'Lucas Kendall',
            title: 'Warehouse',
            ext: 'n/a',
            email: undefined,
            picture: '',
            id: 'l'
        },
        {
            name: 'Lucy Nielson',
            title: 'Inside Sales',
            ext: '218',
            email: 'lucy',
            picture: ''
        },
        {
            name: 'Mike Trimble',
            title: 'Inventory Management',
            ext: '232',
            email: 'mike',
            picture: '',
            id: 'm'
        },
        {
            name: 'Ralph Kraus',
            title: 'Outside Sales',
            ext: '214',
            email: 'ralph',
            picture: '',
            id: 'r'
        },
        {
            name: 'Ray Bristow',
            title: 'General Manager',
            ext: '204',
            email: 'rbristow',
            picture: ''
        },
        {
            name: 'Richard Lampart',
            title: 'Inside Sales',
            ext: '202',
            email: 'richard',
            picture: ''
        },
        {
            name: 'Sarah Perkins',
            title: 'Website Developer',
            ext: '225',
            email: 'sarah',
            picture: '',
            id: 's'
        },
        {
            name: 'Stephanie Stewart',
            title: 'Inside Sales',
            ext: '217',
            email: 'stephanie',
            picture: ''
        },
        {
            name: 'Tara Garcia',
            title: 'Outside Sales',
            ext: 'n/a',
            email: 'tara',
            picture: '',
            id: 't'
        },
        {
            name: 'Thomas Chirokov',
            title: 'Warehouse',
            ext: 'n/a',
            email: undefined,
            picture: ''
        },
        {
            name: 'Tony Guilliams',
            title: 'Warehouse',
            ext: 'n/a',
            email: 'tony',
            picture: ''
        },
        {
            name: 'Trisha Cooper',
            title: 'Pricing',
            ext: '215',
            email: 'trisha',
            picture: ''
        },
        {
            name: 'Tyler Gregg',
            title: 'Warehouse',
            ext: 'n/a',
            email: 'tyler',
            picture: ''
        },
        {
            name: 'Vicki Rappin',
            title: 'Purchasing',
            ext: '216',
            email: 'rappin',
            picture: '',
            id: 'v'
        },
        {
            name: 'Wil Simon',
            title: 'Warehouse Manager',
            ext: '228',
            email: 'simon.says',
            picture: '',
            id: 'w'
        },
        {
            name: 'Will Wall',
            title: 'Warehouse',
            ext: 'n/a',
            email: undefined,
            picture: ''
        },
        {
            name: 'Wyatt Ferguson',
            title: 'Counter Sales',
            ext: 'n/a',
            email: 'wyatt',
            picture: ''
        },
        {
            name: 'Zach Larson',
            title: 'Warehouse',
            ext: 'n/a',
            email: 'zach',
            id: 'z'
        },
    ]
}]);