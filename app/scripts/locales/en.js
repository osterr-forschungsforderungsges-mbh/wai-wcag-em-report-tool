'use strict';

try {
  angular.module('wcagReporter');
} catch (e) {
  angular.module('wcagReporter', ['pascalprecht.translate']);
}

angular.module('wcagReporter').config(function ($translateProvider) {
  $translateProvider.translations('en', {
    'NAV_START': 'Start Evaluating',
    'NAV_LINKS': 'Important links',
    'NAV_IMPORT': 'Load Data',
    'NAV_EXPORT': 'Save Data',
    'NAV_HELP': 'Help',
    'WZRD_START': 'Start',
    'WZRD_SCOPE': 'Define Scope',
    'WZRD_EXPLORE': 'Explore Website',
    'WZRD_SAMPLE': 'Select Sample',
    'WZRD_TEST': 'Audit Sample',
    'WZRD_FINALIZE': 'Report Findings',
    'WZRD_SAVE': 'View Report',
    'HD_START': 'Website Accessibility Evaluation Report Generator',
    'HD_STEP1': 'Step 1: Define the Evaluation Scope',
    'HD_STEP2': 'Step 2: Explore the Target Website',
    'HD_STEP3': 'Step 3: Select a Representative Sample',
    'HD_STEP4': 'Step 4: Audit the Selected Sample',
    'HD_STEP5': 'Step 5: Report the Evaluation Findings',
    'HD_SAVE': 'Sample Website Accessibility Evalauation Report',
    'HD_STRUCT_SAMPLE': 'Structured Sample',
    'HD_RANDOM_SAMPLE': 'Randomly Selected Sample',
    'HD_SAMPLE': 'Sample of Audited Web Pages and Web Page States',
    'HD_CRITERIA': 'Success Criteria',
    'HD_FINALIZE': 'Finalize The Report',
    'INTRO_STEP2': 'Add pages to the text fields below while exploring the website',
    'SELECT_PAGE_TO_WORK_ON': 'Highlight specific web pages and web page states',
    'RESULTS_FOR': 'Results for',
    'SAMPLE_FINDINGS': 'Results for the entire sample',
    'LABEL_SITE_NAME': 'Website name',
    'LABEL_SITE_SCOPE': 'Scope of the website',
    'LABEL_CONFORMANCE_TGT': 'Conformance target',
    'LABEL_SPECIFICS': 'Evaluation specifics',
    'LABEL_EXTRA_REQUIREMENTS': 'Additional evaluation requirements',
    'LABEL_SUPPORT_BASE': 'Accessibility support baseline',
    'LABEL_RELIEDUP_TECH': 'Web technologies relied upon',
    'LABEL_COMMON_PAGES': 'Common web pages',
    'LABEL_ESSENT_FUNC': 'Essential functionality of the website',
    'LABEL_VARIETY_PAGE_TYPES': 'Variety of web page types',
    'LABEL_OTHER_PAGES': 'Other relevant web pages',
    'LABEL_COMMISSIONER': 'Evaluation commissioner',
    'LABEL_CREATOR': 'Evaluator',
    'LABEL_TITLE': 'Report title',
    'LABEL_DATE': 'Evaluation date',
    'LABEL_SUMMARY': 'Summary of evaluation findings',
    'LABEL_PAGE': 'Web page',
    'LABEL_HANDLE': 'Handle',
    'LABEL_OUTCOME': 'Outcome',
    'LABEL_DESCR': 'Findings',
    'LABEL_TECH': 'Web Technology',
    'LABEL_TECH_SPEC': 'Specification URI',
    'ITEM': 'Item',
    'BTN_REMOVE_PAGE': 'Remove page',
    'LABEL_INFO': 'Info',
    'LABEL_CLOSE_INFO': 'Close info',
    'WCAG_A': 'WCAG 2.0 level A',
    'WCAG_AA': 'WCAG 2.0 level AA',
    'WCAG_AAA': 'WCAG 2.0 level AAA',
    'PLH_HANDLE': 'Shortname to help you identify the web page or web page state',
    'PLH_PAGE_URL': 'URL or description of the web page or web page state',
    'PLH_TECH': 'Name of the web technology that is relied upon for conformance',
    'PLH_TECH_SPEC': 'URI or description for the web technology specification',
    'PLH_ASSERT_DESC': 'Observations made during evaluation',
    'INF_RELIEDUP_TECH': 'INF RELIEDUP TECH',
    'INF_COMMON_PAGES': 'INF COMMON PAGES',
    'INF_ESSENT_FUNC': 'INF ESSENT FUNC',
    'INF_VARIETY_PAGE_TYPES': 'INF VARIETY PAGE TYPES',
    'INF_OTHER_PAGES': 'INF OTHER PAGES',
    'INF_COMMISSIONER': 'INF COMMISSIONER',
    'INF_CREATOR': 'INF CREATOR',
    'INF_TITLE': 'INF TITLE',
    'INF_DATE': 'INF DATE',
    'INF_SUMMARY': 'INF SUMMARY',
    'INF_SPECIFICS': 'INF SPECIFICS',
    'INF_STRUCT_SAMPLE': 'INF STRUCT SAMPLE',
    'INF_RAND_SAMPLE': 'INF RAND SAMPLE',
    'INF_SITE_NAME': 'INF SITE NAME',
    'INF_SITE_SCOPE': 'INF SITE SCOPE',
    'INF_CONF_TGT': 'INF CONF TGT',
    'INF_SUPPORT_BASE': 'INF SUPPORT BASE',
    'INF_EXTRA_REQUIREMENTS': 'INF EXTRA REQUIREMENTS',
    'INF_AUDIT_SAMPLE': 'INF AUDIT SAMPLE',
    'WARNING_BEFORE_UNLOAD': 'WARNING: WCAG-EM Reporter does not automatically save your changes. If you want to save changes soyou can continue later, save a local copy of the data using export',
    'BY': 'Report Creator:',
    'COMMISION_BY': 'Evaluation Commissioner:',
    'HD_SPECIFICS': 'Recording of evaluation specifics',
    'HD_DOCS': 'Related WCAG 2.0 resources',
    'HD_SCORE': 'Overview of audit results',
    'HD_SCOPE': 'Scope of the evaluation',
    'HD_SUMMARY': 'Summary of the evaluation findings',
    'BTN_ADD_TECH': 'Add web technology',
    'BTN_REMOVE_TECH': 'Remove web technology',
    'BTN_ADD_PAGE': 'Add web page or web page state',
    'BTN_START_EVAL': 'Start a new evaluation report',
    'BTN_CONTINUE_EVAL': 'Continue working on your open evaluation report',
    'BTN_IMPORT_EVAL': 'Import evaluation data from a previous session',
    'OPEN_FINAL_REPORT': 'Generate the sample report',
    'BTN_SAVE_HTML': 'Save the evaluation report (HTML)',
    'BTN_SAVE_JSON': 'Download the evaluation data (JSON)',
    'BTN_EXPAND_PAGES': 'Show available evaluation details',
    'BTN_COLLAPSE_PAGES': 'Hide evaluation details',
    'PREV_STEP': 'Previous step',
    'NEXT_STEP': 'Next step'
  });
  $translateProvider.preferredLanguage('en');
});
