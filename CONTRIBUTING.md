# Contribution Guidelines

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms. Please also review our [Contributor License Agreement ("CLA")](INDIVIDUAL_CONTRIBUTOR_LICENSE.md) prior to submitting changes to the project.  You will need to attest to this agreement following the instructions in the [Paperwork for Pull Requests](#paperwork-for-pull-requests) section below.

---

# How to Contribute

Now that we have the disclaimer out of the way, let's get into how you can be a part of our project. There are many different ways to contribute.

## Pull Requests
### Your First Pull Request
So you have decided to contribute code back to upstream by opening a pull request. You've invested a good chunk of time, and we appreciate it. We will do our best to work with you and get the PR looked at.

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

We have a list of [beginner friendly issues](link) to help you get your feet wet in the codebase and familiar with our contribution process. This is a great place to get started.

### Proposing a Change
Small pull requests are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it. It is recommended to follow [this commit message style]().

Please make sure the following is done when submitting a pull request:

1. Fork the repository and create your branch from `main`.
1. Describe your test plan in your pull request description. Make sure to test your changes!
1. Make sure your code lints (`yarn prettier` && `yarn lint)`.
1. All pull requests should be opened against the `main` branch.

#### Test Plan
A good test plan has the exact commands you ran and their output, provides screenshots or videos if the pull request changes UI.

#### Breaking Changes
When adding a new breaking change, follow this template in your pull request:

```md
### New breaking change here

- **Who does this affect**:
- **How to migrate**:
- **Why make this breaking change**:
- **Severity (number of people affected x effort)**:
```

Please read this guide and make sure you agree with our [Contributor License Agreement ("CLA")](INDIVIDUAL_CONTRIBUTOR_LICENSE.md).
- Make sure git knows your name and email address:
   ```
   $ git config user.name "J. Random User"
   $ git config user.email "j.random.user@example.com"
   ```

The name and email address must be valid as we cannot accept anonymous contributions.

The first time you open a pull request in this repository, you will see a comment on your PR with a link that will allow you to sign our Contributor License Agreement (CLA) if necessary.
> The link will take you to a page that allows you to view our CLA.  You will need to click the `Sign in with GitHub to agree button` and authorize the cla-assistant application to access the email addresses associated with your GitHub account.  Agreeing to the CLA is also considered to be an attestation that you either wrote or have the rights to contribute the code.  All committers to the PR branch will be required to sign the CLA, but you will only need to sign once.  This CLA applies to all repositories in the Optum org.

### What Happens Next?
The maintainers will be monitoring for pull requests. Do help us by keeping pull requests consistent by following the guidelines above.

## Code Style
[Prettier](https://prettier.io) will catch most styling issues that may exist in your code. You can check the status of your code styling by simply running `yarn prettier`.

However, there are still some styles that Prettier cannot pick up.

### Semantic Commit Messages
See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: allow overriding of webpack config
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

The various types of commits:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

Use lower case not title case!

## General Guidelines

Ensure your pull request (PR) adheres to the following guidelines:

* Try to make the name concise and descriptive.
* Give a good description of the change being made. Since this is very subjective, see the [Updating Your Pull Request (PR)](#updating-your-pull-request-pr) section below for further details.
* Every pull request should be associated with one or more issues. If no issue exists yet, please create your own.
* Make sure that all applicable issues are mentioned somewhere in the PR description. This can be done by typing # to bring up a list of issues.

### Updating Your Pull Request (PR)

A lot of times, making a PR adhere to the standards above can be difficult. If the maintainers notice anything that we'd like changed, we'll ask you to edit your PR before we merge it. This applies to both the content documented in the PR and the changed contained within the branch being merged. There's no need to open a new PR. Just edit the existing one.

[email]: mailto:opensource@optum.com