(function() {
        'use strict';

        angular
            .module('app')
            .controller('TrackerController', TrackerController);

        TrackerController.$inject = [];

        /* @ngInject */
        function TrackerController() {
            var vm = this;

            vm.incomeTotal = 0;
            vm.expenseTotal = 0;

            vm.incomeEntries = [];
            vm.expenseEntries = [];



            vm.addIncome = function() {
                vm.incomeEntries.push(vm.newIncome)
                vm.incomeTotal += vm.newIncome.amount;
                vm.newIncome = '';
            }

            vm.addExpense = function() {
                vm.expenseEntries.push(vm.newExpense)
                vm.expenseTotal += vm.newExpense.amount;
                vm.newExpense = '';
            }



        }



})();
