JudoApp.factory("branchs", function(Branch) {
    var branchs = [];

    var getAll = function () {
        return branchs;
    }

    var getBranchById = function (index) {
        return branchs[index];
    }

    var addBranch = function (branch) {
        branchs.push(branch);
    }

    var update = function(index, branch) {
        branchs[index] = branch;
    }

    var remove = function(index) {
        branchs.splice(index, 1);
    }

    // var removeAll = function() {
    //     branchs = [];
    // }

    var setBranchs = function (branchsPlain) {
        for (var i = 0; i < branchsPlain.length; i++) {
            branchs.push(new Branch(branchsPlain[i].name, branchsPlain[i].address, 
                branchsPlain[i].city, branchsPlain[i].phone, branchsPlain[i].coach,
                branchsPlain[i].urlGoMap))
        }
    }

    return {
        getAll: getAll,
        getBranchById: getBranchById,
        addBranch: addBranch,
        update: update,
        remove: remove,
        setBranchs: setBranchs
    }
})