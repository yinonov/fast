import React from "react";
import {
    DataGrid as BaseDataGrid,
    DataGridCellProps,
    DataGridColumnDefinition,
    DataGridHandledProps as BaseDataGridHandledProps,
    DataGridProps as BaseDataGridProps,
    DataGridClassNameContract,
    DataGridManagedClasses,
    DataGridUnhandledProps,
} from "@microsoft/fast-components-react-base";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import { DesignSystem, DataGridStyles } from "@microsoft/fast-components-styles-msft";
import { Subtract } from "utility-types";
import dataGridSchema from "./data-grid.schema";
import dataGridSchema2 from "./data-grid.schema.2";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
const DataGrid = manageJss(DataGridStyles)(BaseDataGrid);
type DataGrid = InstanceType<typeof DataGrid>;

type DataGridHandledProps = Subtract<BaseDataGridHandledProps, DataGridManagedClasses>;
type DataGridProps = ManagedJSSProps<
    BaseDataGridProps,
    DataGridClassNameContract,
    DesignSystem
>;

export {
    DataGrid,
    DataGridCellProps,
    DataGridClassNameContract,
    DataGridColumnDefinition,
    DataGridHandledProps,
    DataGridUnhandledProps,
    DataGridProps,
    dataGridSchema,
    dataGridSchema2,
};
