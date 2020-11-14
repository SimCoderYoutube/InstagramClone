import * as React from 'react';
import type { NavigationContainerRef } from '@react-navigation/core';
import type { DocumentTitleOptions } from './types';
/**
 * Set the document title for the active screen
 */
export default function useDocumentTitle(ref: React.RefObject<NavigationContainerRef>, { enabled, formatter, }?: DocumentTitleOptions): void;
