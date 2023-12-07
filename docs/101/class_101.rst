F5 and Ansible 101 - Basic Course
=================================

`Last updated: 2023-12-7 6:00 AM MT`

This lab will help anyone who is getting started with Ansible and F5 integrations understand the following 

- How to setup/configure Playbooks
- How to run playbooks with Ansible Automation Platform 2.x with Ansible Navigator and Execution Engines.
- How to run playbooks with Ansible Automation Platform 2.x Controller (Formerly known as Tower)


Lab & Tasks:
~~~~~~~~~~~~

The next page (Introduction) will cover the lab environment, access, and lab variables. The lab will be using UDF where we have deployed the following resources:

- F5 BIG-IP 17.1.x that will be used for the Automation.
- 2x Web Server Nodes used as server endpoints for the BIG-IP to test/validate traffic
- RHEL Box with Ansible Automation Platform installed to run automation usecases
- External Client for testing connectivity and validating connections
 
During the lab exercises we will explore different methods of deploying applications
that are included in the lab

Section 1
---------

.. toctree::
   :glob:
   :maxdepth: 2
   :Caption: Section 1

   1.0/*

Section 2
---------

.. toctree::
   :glob:
   :maxdepth: 2
   :Caption: Section 2

   2.0/*

Section 3
---------

.. toctree::
   :glob:
   :maxdepth: 2
   :Caption: Section 3

   3.0/*

Section 4
---------

.. toctree::
   :glob:
   :maxdepth: 2
   :Caption: Section 4

   4.0/*
   