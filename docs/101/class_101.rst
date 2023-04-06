F5 and Ansible 101 - Basic Course
=================================

`Last updated: 2023-4-6 5:00 PM MT`

Make Intro docs ****
This lab will help anyone who is getting started with Ansible and F5 integrations understand the following 

- How to setup/configure Playbooks
- How to run playbooks with Ansible Automation Platform 2.x with Ansible Navigator and Execution Engines.
- How to run playbooks with Ansible Automation Platform 2.x Controller (Formerly known as Tower)


Lab & Tasks:
~~~~~~~~~~~~

The next page (Introduction) will cover the lab environment, access, and lab variables. The lab will be using UDF or Provisioner where we have deployed the following resources:

- F5 BIG-IP 17.1.x that will be used for the Automation.
- 2x Web Server Nodes used as server endpoints for the BIG-IP to test/validate traffic
- RHEL Box with Ansible Automation Platform installed to run automation usecases
- External Client (UDF only) for testing connectivity and validating connections

.. note:
   If using AWS Provisioner testing connectivity and validating connections would be done with your client.

 
During the lab exercises we will explore different methods of deploying applications
that are included in the lab

.. toctree::
   :maxdepth: 2
   :numbered:
   :caption: Labs:
   :glob:
   
   intro*
   1.0/*
   2.0/*
   3.0/*
   4.0/*
   