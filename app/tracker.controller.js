(function() {
    'use strict';

    angular
        .module('app')
        .controller('TrackerController', TrackerController);

    TrackerController.$inject = [];

    /* @ngInject */
    function TrackerController() {
        var vm = this;

        vm.incomeEntriesText = [];
        vm.incomeEntriesAmount = [];
        vm.expenseEntriesText = [];
        vm.expenseEntriesAmount = [];

        vm.income = function() {

            vm.addIncomeText = function() {
                vm.incomeEntriesText.push(vm.newIncomeText)
                vm.newIncomeText = '';
            }

            vm.addIncomeAmount = function() {
                vm.incomeEntriesAmount.push(vm.newIncomeAmount)
                vm.newIncomeAmount = '';
            }

            vm.incomeTotal = function() {
                var tNumber = 0;
                for (i = 0; i < vm.incomeEntriesAmount.length; i++){
                  tNumber += vm.incomeEntriesAmount[i];
                }
                return tNumber;
            }


        }

        vm.expense = function() {

            vm.addExpenseText = function() {
                vm.expenseEntriesText.push(vm.newExpenseText)
                vm.newExpenseText = '';
            }

            vm.addExpenseAmount = function() {
                vm.expenseEntriesAmount.push(vm.newExpenseAmount)
                vm.newExpenseAmount = '';
            }

        }

        vm.expenseTotal = function() {
            var toNumber = 0;
            for (i = 0; i < vm.expenseEntriesAmount.length; i++){
              toNumber += vm.expenseEntriesAmount[i];
            }
            return toNumber;
        }







    }
})();
